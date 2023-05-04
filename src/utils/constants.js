const API_KEY = '';

export const VIDEO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=15&key="+API_KEY;

export const VIDEO_API_URL_RELATED = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key="+API_KEY;

export const VIDEO_API_URL_SINGLE = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id=";

export const VIDEO_API_URL_COMMENT = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&key="+API_KEY+"&videoId=";

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_API_URL_SEARCH_KEY = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key="+API_KEY+"&q=";

export const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export const chatMessageList = [  "The cat chased the mouse",  "The sun is shining brightly",  "I love eating ice cream",  "The car drove down the road",  "Playing guitar is fun for me",  "The trees sway in the breeze",  "The ocean waves crash loudly",  "Reading books is my hobby",  "The cake tastes really delicious",  "The city is full of life",  "My phone is always by my side",  "The dog barked at the mailman",  "I enjoy hiking in the mountains",  "The rain poured down all day",  "The concert was really loud",  "The sky is a beautiful shade of blue",  "I learned how to ride a bike",  "The snow covered everything in white",  "The river flowed gently downstream",  "I can't wait to travel the world",  "The moon shone brightly in the sky",  "The fire crackled and popped",  "The beach is my favorite place to relax",  "The bird sang a sweet melody",  "I need to buy some groceries",  "The mountain range was breathtaking",  "I always wear a warm coat in winter",  "The city skyline is impressive",  "The apple pie smells amazing",  "I love spending time with my family"] ;



