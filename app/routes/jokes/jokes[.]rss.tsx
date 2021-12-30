import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";


function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function replaceAll(str: string, match : string, replacement: string){
   return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

function escapeCdata(s: string) {
  return replaceAll(s, "]]>", "]]]]><![CDATA[>");
}

function escapeHtml(s: string) {
  return replaceAll(replaceAll(replaceAll(replaceAll(replaceAll(s, "&", "&amp;"), "<", "&lt;"), ">", "&gt;"), '"', "&quot;"), "'", "&#039;");
}

export const loader: LoaderFunction = async ({
  request
}) => {
  const jokes = await db.joke.findMany({
    take: 100,
    orderBy: { createdAt: "desc" },
    include: { jokester: { select: { username: true } } }
  });

  const host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost")
    ? "http"
    : "https";
  const domain = `${protocol}://${host}`;
  const jokesUrl = `${domain}/jokes`;

  const rssString = `
    <rss xmlns:blogChannel="${jokesUrl}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${jokesUrl}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${jokes
          .map(joke =>
            `
            <item>
              <title><![CDATA[${escapeCdata(
                joke.name
              )}]]></title>
              <description><![CDATA[A funny joke called ${escapeHtml(
                joke.name
              )}]]></description>
              <author><![CDATA[${escapeCdata(
                joke.jokester.username
              )}]]></author>
              <pubDate>${joke.createdAt.toUTCString()}</pubDate>
              <link>${jokesUrl}/${joke.id}</link>
              <guid>${jokesUrl}/${joke.id}</guid>
            </item>
          `.trim()
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${
        60 * 10
      }, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};