import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    const pedro = await db.user.create({
        data: {
          username: "pedro",
          // this is a hashed version of "twixrox"
          passwordHash:
            "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u"
        }
    });
    await Promise.all(
        getJokes().map(joke => {
            const data = { jokesterId: pedro.id, ...joke };
            return db.joke.create({ data });
        })
    );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
        name: "Road worker",
        content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`
    },
    {
        name: "Frisbee",
        content: `I was wondering why the frisbee was getting bigger, then it hit me.`
    },
    {
        name: "Trees",
        content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`
    },
    {
        name: "Skeletons",
        content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`
    },
    {
        name: "Hippos",
        content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`
    },
    {
        name: "Dinner",
        content: `What did one plate say to the other plate? Dinner is on me!`
    },
    {
        name: "Elevator",
        content: `My first time using an elevator was an uplifting experience. The second time let me down.`
    },
    {
        name: "ashes",
        content: "When the window fell into the incinerator, it was a pane in the ash to retrieve."
    },
    {
        name: "pirate's favorite letter",
        content: "What's a pirate's favorite letter? It be the Sea"
    },
    {
        name: "counting cows",
        content: "How do you count cows? A 'Cow'culator"
    },
    {
        name: "He's Alright",
        content: "Did you hear about the guy whose whole left side was cut off? He's all right now."
    },
    {
        name: "Bakery Fire",
        content: "My friend's bakery burned down last night. Now his business is toast."
    },
    {
        name: "Nut Assault",
        content: "Two peanuts were walking down the street. One was a salted."
    },
    {
        name: "Wonderwall",
        content: "My son asked me to stop singing Oasis songs in public. I said maybe."
    },
    {
        name: "Banking",
        content: "I used to be a banker but I lost interest"
    },
    {
        name: "Golfer Pants",
        content: "Why did the golfer bring two pairs of pants? In case he got a hole-in-one."
    },
    {
        name: "Lieutenant Dan",
        content: "To the man in the wheelchair that stole my camouflage jacket; You can hide, but you can't run."
    },
    {
        name: "Flamingo",
        content: "When my wife told me to stop impersonating a flamingo, I had to put my foot down."
    },
    {
        name: "My Day",
        content: "The rotation of earth really makes my day."
    },
    {
        name: "Chickens can't drive",
        content: "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans."
    },
    {
        name: "Bel Air",
        content: "How do you find Will Smith in the snow? You look for the fresh prints."
    },
    {
        name: "No Charge",
        content: "A proton, an electron, & a neutron walk into a bar. The proton orders a shot, drinks it, pulls out his wallet, and pays the bartender. The electron orders a shot, drinks it, pulls out his wallet, and pays the bartender. The neutron orders a shot, drinks it, then pulls out his wallet. The bartender stops him and says, \"for you, no charge...\""
    },
    {
        name: "I'm Positive",
        content: "Two atoms are walking down the street. One says, \"Oh no! I lost an electron!\", The other asks him, \"Are you sure?\", The first one says, \"Yeah, I'm positive\""
    },
    {
        name: "Sandwich",
        content: "A ham sandwich walks into a bar and orders a beer. The bartender looks at him and says, \"Sorry we don't serve food here.\""
    },
    {
        name: "I Can't Hear This Joke",
        content: "What is Beethoven's favorite fruit? A ba-na-na-na."
    },
    {
        name: "Exhaust",
        content: "I had a dream that I was a muffler last night. I woke up exhausted."
    },
    {
        name: "Watch Your Head",
        content: "Two guys walk into a bar, the third one ducks."
    },
    {
        name: "Every 6 Months",
        content: "What time did the man go to the dentist? Tooth hurt-y."
    },
    {
        name: "Color Blind",
        content: "Found out I was colour blind the other day... That one came right out the purple."
    },
    {
        name: "Thing Factory",
        content: "Where are average things built? In the satisfactory."
    },
    {
        name: "Thoughtful Clown",
        content: "Yesterday a clown held a door open for me. I thought it was a nice jester."
    },
    {
        name: "Frog Facts",
        content: "Just read a few facts about frogs. They were ribbiting."
    },
    {
        name: "Trampoline Bed",
        content: "I just swapped our bed for a trampoline. My wife hit the roof."
    },
    {
        name: "24 Hours",
        content: "Astronomers got tired of watching the moon go round the earth for 24 hours, so they decided to call it a day."
    },
    {
        name: "Checkout Girl",
        content: "I asked the checkout girl for a date. She said \"They're in the fruit aisle next to the bananas.\""
    },
    {
        name: "Well Dressed Bicycle",
        content: "What's the difference between a well dressed man on a a bicycle and a poorly dressed man on a tricycle? Attire!"
    },
    {
        name: "Pirate Birthday",
        content: "What did the pirate say on his 80th birthday? Aye matey"
    },
    {
        name: "Italians",
        content: "What do you call a sketchy Italian neighbourhood? The Spaghetto."
    },
    {
        name: "Kleptomania",
        content: "I have kleptomania, but when it gets bad, I take something for it."
    },
    {
        name: "Doorbells",
        content: "Doorbells, don't knock 'em."
    },
    {
        name: "Tropical Diet",
        content: "My wife is on a tropical food diet, the house is full of the stuff. It's enough to make a mango crazy."
    },
    {
        name: "Whiteboards",
        content: "Whiteboards are remarkable."
    },
    {
        name: "I Wish I Had Laser Hair",
        content: "Why do so many people with laser hair want to get it removed?"
    },
    {
        name: "Terror Of The Skies",
        content: "What has twenty legs and flies? Ten pairs of pants."
    },
    {
        name: "The Incredible Mr. Dead",
        content: "What has twenty legs and flies? Five dead Horses."
    },
    {
        name: "Eye Love This Joke",
        content: "What do you call a fish with no eyes? Fsh."
    },
    {
        name: "I'll Never Let Go Of This Joke",
        content: "What do you get if you cross the Atlantic with the Titanic? About halfway."
    },
    {
        name: "Why Don't They Just Open A Bankery",
        content: "Why do bakers work so hard? They knead the dough."
    },
    {
        name: "Meling",
        content: "What do you call a man with a rug on his head? Matt."
    },
    {
        name: "The Royal Flush Of The Jungle",
        content: "Why shouldn't you play cards in the jungle? Too many cheetahs."
    },
    {
        name: "Obviously",
        content: "What's big, red, and eats rocks? A big, red, rock-eater."
    },
    {
        name: "A Toast To Monkey Jokes",
        content: "How do you make toast in the jungle? Pop your bread under a g'rilla."
    },
    {
        name: "These Jokes Have Sunk So Low",
        content: "What lies on the ocean floor and shivers? A nervous wreck."
    },
    {
        name: "Wanted For Eight Armed Robbery",
        content: "Who is the quickest draw in the ocean? Billy the Squid."
    },
    {
        name: "Prison Jewelry",
        content: "What's the difference between a jeweller and a prison warden? One sells watches, and the other watches cells."
    },
    {
        name: "My Nephew",
        content: "What's brown and sticky? A stick."
    },
    {
        name: "Banana Joke For Scale",
        content: "Why did the banana go to the doctors'? He wasn't peeling very well."
    },
    {
        name: "Napoleonic Bad Joke",
        content: "Where did Napoleon keep his armies? Up his sleevies."
    },
    {
        name: "Andes Are In The Candy Aisle",
        content: "Where are the Andes? At the end of your armies."
    },
    {
        name: "Lawnmower Bird-Man",
        content: "What do you get when you run over a bird with your lawnmower? Shredded tweet."
    },
    {
        name: "This Piano Jokes Struck A Chord",
        content: "What do you get if you drop a piano down a coal shaft? A flat minor."
    },
    {
        name: "Burglars",
        content: "How does a burglar get into your house? Intruder window."
    },
    {
        name: "Just The Tip Of The Worm",
        content: "What's worse than finding a worm in your apple? Finding half a worm."
    },
    {
        name: "If You Count Alcoholics As Wealth",
        content: "What is the richest country in the world? Ireland. Its capital is always Dublin."
    },
    {
        name: "Do Androids Dream of Electric Clouds?",
        content: "What do you call a sheep with no legs? A cloud."
    },
    {
        name: "Beef Oven",
        content: "What was Beethoven's fifth favorite fruit? Ba-na-na-na."
    },
    {
        name: "Your Grapes Take My Breath Away",
        content: "What did the green grape say to the purple grape? Breathe, you fool, breathe!"
    },
    {
        name: "Soul Duck",
        content: "How do you turn a duck into a soul singer? Put it in a microwave until its bill withers."
    },
    {
        name: "A Wall Of movies",
        content: "Last night me and my girlfriend watched three movies back to back. Luckily I was the one facing the TV."
    },
    {
        name: "De-Grubered",
        content: "I've deleted the phone numbers of all the Germans I know from my mobile phone. Now it's Hans free."
    },
    {
        name: "You Can't Handle The Ending",
        content: "Why did the octopus beat the shark in a fight? Because it was well armed."
    },
    {
        name: "Color Me Concerned",
        content: "A red and a blue ship have just collided in the Caribbean. Apparently the survivors are marooned."
    },
    {
        name: "Swiss Cheesey",
        content: "What's the advantage of living in Switzerland? Well, the flag is a big plus."
    },
    {
        name: "This Joke Expired Years Ago",
        content: "I am terrified of elevators. I'm going to start taking steps to avoid them."
    },
    {
        name: "The Dream Was Deep In Soda Me",
        content: "I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea."
    },
    {
        name: "You Have To Be Kitten Me",
        content: "My cat just threw up on the carpet. I don't think it's feline well."
    },
    {
        name: "My Type Of Humor",
        content: "I went to the doctor today and he told me I had type A blood, but it was a type O."
    },
    {
        name: "Tasteless Joke",
        content: "Today a girl said she recognized me from vegetarian club, but I'm sure I've never met herbivore."
    },
    {
        name: "They Pinch Pennies",
        content: "Why do crabs never give to charity? Because they're shellfish."
    },
    {
        name: "The End Of The Joke",
        content: "People keep making apocalypse jokes like there's no tomorrow."
    },
    {
        name: "Light Up Their Christmas",
        content: "If you're struggling to think of what to get someone for Christmas. Get them a fridge, and watch their face light up when they open it."
    },
    {
        name: "Czech This Joke Out",
        content: "I was thinking about moving to Moscow but there is no point Russian into things."
    },
    {
        name: "They Only Serve Cheese",
        content: "Did you hear about the new restaurant on the moon? The food is great, but there's just no atmosphere."
    },
    {
        name: "Milking Fast",
        content: "Milk is also the fastest liquid on earth. It's pasteurized before you even see it."
    },
    {
        name: "Small Thefts",
        content: "Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads \"Small medium at large.\""
    },
    {
        name: "I Take My Puns Rare",
        content: "A steak pun is a rare medium well done."
    },
    {
        name: "Clean Vocals",
        content: "Singing in the shower is all fun and games until you get shampoo in your mouth. Then it's a soap opera."
    },
    {
        name: "Not Even A Tinkle",
        content: "Why can't you hear a pterodactyl using the bathroom? Because the P is silent."
    },
    {
        name: "Jump In Price",
        content: "The price of bouncy castles have doubled this year. That's inflation for you."
    },
    {
        name: "It's NOT Funny, Chocolate",
        content: "Whenever I want to start eating healthy, a chocolate bar looks at me and Snickers."
    },
    {
        name: "Banana Hands",
        content: "What do you get hanging off banana trees? Sore arms."
    },
    {
        name: "Perforated Hatred",
        content: "I hate perforated lines, they're tearable."
    },
    {
        name: "I Predict A Heart Attack",
        content: "What do you call a fat psychic? A four-chin teller."
    },
    {
        name: "Uno Joke, Por Favor",
        content: "A Mexican magician says he'll disappear on the count of 3; \"Uno... dos... poof...\". He disappeared without a tres."
    },
    {
        name: "This Joke Will Spark A Laugh",
        content: "What's the difference between a hippo and a Zippo? One is heavy, and the other is a little lighter."
    }
  ];
}