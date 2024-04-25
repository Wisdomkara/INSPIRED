const allQuotes = [
  {
    id: 1,
    author: `albert einstein`,
    quote: `the only way to escape the corruptible effect of praise is to go on working. - (1 corinthians 15:58, esv)`,
  },
  {
    id: 2,
    author: ` maya angelou`,
    quote: `i've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - (1 corinthians 13:13, esv)`,
  },
  {
    id: 3,
    author: `vincent van gogh`,
    quote: `normality is a paved road: it's comfortable to walk, but no flowers grow on it. - (romans 12:2, esv)`,
  },
  {
    id: 4,
    author: `confucius`,
    quote: `our greatest glory is not in never falling, but in rising every time we fall. - (philippians 4:13, esv)`,
  },
  {
    id: 5,
    author: ` albert einstein,
quote: the only way to escape the corruptible effect of praise is to go on working. - (1 corinthians 15:58, esv)`,
  },
  {
    id: 6,
    author: `martin luther king jr.`,
    quote: `the time is always right to do what is right. - (galatians 6:9, esv)`,
  },
  {
    id: 7,
    author: `mahatma gandhi`,
    quote: `the future depends on what you do today. - (james 2:17, esv)`,
  },
  {
    id: 8,
    author: `aristotle`,
    quote: `we are what we repeatedly do. excellence, then, is not an act, but a habit. - (philippians 4:8, esv)`,
  },
  {
    id: 9,
    author: `walt disney`,
    quote: `if you can dream it, you can do it. - (ephesians 3:20, esv)`,
  },
  {
    id: 10,
    author: `oscar wilde`,
    quote: `we are all in the gutter, but some of us are looking at the stars. - (philippians 4:8, esv)`,
  },
  {
    id: 11,
    author: `bruce lee`,
    quote: `empty your mind, be formless. shapeless, like water. if you put water into a cup, it becomes the cup. you put water into a bottle and it becomes the bottle. you put it in a teapot, it becomes the teapot. now, water can flow or it can crash. be water, my friend. - (romans 12:2, esv)`,
  },
  {
    id: 12,
    author: `steve jobs`,
    quote: `your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. and the only way to do great work is to love what you do. if you haven't found it yet, keep looking. don't settle. as with all matters of the heart, you'll know when you find it. - (colossians 3:23-24, esv)`,
  },
  {
    id: 13,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 14,
    author: `eleanor roosevelt`,
    quote: `no one can make you feel inferior without your consent. - (1 samuel 16:7, esv)`,
  },
  {
    id: 15,
    author: `albert einstein`,
    quote: `the true sign of intelligence is not knowledge but imagination. - (proverbs 2:6, esv)`,
  },
  {
    id: 16,
    author: `mahatma gandhi`,
    quote: `an eye for an eye only ends up making the whole world blind. - (matthew 5:38-39, esv)`,
  },
  {
    id: 17,
    author: `helen keller`,
    quote: `optimism is the faith that leads to achievement. nothing can be done without hope and confidence. - (romans 15:13, esv)`,
  },
  {
    id: 18,
    author: `albert einstein`,
    quote: `strive not to be a success, but rather to be of value. - (philippians 2:3-4, esv)`,
  },
  {
    id: 19,
    author: `nelson mandela`,
    quote: `education is the most powerful weapon which you can use to change the world. - (proverbs 18:15, esv)`,
  },
  {
    id: 20,
    author: `aristotle`,
    quote: `we are what we repeatedly do. excellence, then, is not an act, but a habit. - (philippians 4:8, esv)`,
  },
  {
    id: 21,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 22,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world, Most people exist, that is all.colosians 3:17`,
  },

  {
    id: 23,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 24,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 25,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 26,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 27,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 28,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 29,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 30,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 31,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 32,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 33,
    author: `walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 34,
    author: `marcus aurelius`,
    quote: `the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 35,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 36,
    author: `leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 37,
    author: `bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 38,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 39,
    author: `maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 40,
    author: `lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 41,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 42,
    author: ` anne frank`,
    quote: `how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 43,
    author: ` mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 44,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 45,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 46,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world`,
  },
  {
    id: 47,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 48,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 49,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 50,
    author: ` socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 51,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 52,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 53,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 54,
    author: ` albert einstein`,
    quote: ` there are only two ways to live your life`,
  },
  {
    id: 55,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 56,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 57,
    author: `walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 58,
    author: ` marcus aurelius`,
    quote: ` the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 59,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 60,
    author: ` leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 61,
    author: ` bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 62,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 63,
    author: `maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 64,
    author: ` lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 65,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 66,
    author: `anne frank`,
    quote: `how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 67,
    author: ` mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 68,
    author: `confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 69,
    author: `maya angelou`,
    quote: `if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 70,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world Most people exist, that is all." (Micah 6:8)`,
  },
  {
    id: 71,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 72,
    author: `albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 73,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 74,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 75,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 76,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 77,
    author: `lao tzu`,
    quote: ` the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 78,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 79,
    author: `j.k. rowling`,
    quote: `it is our choices, harry, that show what we truly are, far more than our abilities. - (colossians 3:23-24, esv)`,
  },
  {
    id: 80,
    author: `rumi`,
    quote: `yesterday i was clever, so i wanted to change the world. today i am wise, so i am changing myself. - (romans 12:2, esv)`,
  },
  {
    id: 81,
    author: ` walt disney`,
    quote: `all our dreams can come true, if we have the courage to pursue them. - (proverbs 16:3, esv)`,
  },
  {
    id: 82,
    author: ` marcus aurelius`,
    quote: `the happiness of your life depends upon the quality of your thoughts. - (philippians 4:8, esv)`,
  },
  {
    id: 83,
    author: `helen keller`,
    quote: `life is either a daring adventure or nothing at all. - (romans 8:28, esv)`,
  },
  {
    id: 84,
    author: `leonardo da vinci`,
    quote: `simplicity is the ultimate sophistication. - (matthew 6:33, esv)`,
  },
  {
    id: 85,
    author: `bruce lee`,
    quote: `the key to immortality is first living a life worth remembering. - (colossians 3:23-24, esv)`,
  },
  {
    id: 86,
    author: `buddha`,
    quote: `the mind is everything. what you think you become. - (proverbs 23:7, esv)`,
  },
  {
    id: 87,
    author: ` maya angelou`,
    quote: `i am the master of my fate, i am the captain of my soul. - (philippians 4:13, esv)`,
  },
  {
    id: 88,
    author: ` lao tzu`,
    quote: `when i let go of what i am, i become what i might be. - (1 peter 5:7, esv)`,
  },
  {
    id: 89,
    author: `walt disney`,
    quote: `the way to get started is to quit talking and begin doing. - (james 1:22, esv)`,
  },
  {
    id: 90,
    author: `anne frank`,
    quote: ` how wonderful it is that nobody need wait a single moment before starting to improve the world. - (matthew 5:16, esv)`,
  },
  {
    id: 91,
    author: `mahatma gandhi`,
    quote: `greatness lies not in being strong, but in the right use of strength. - (colossians 3:23-24, esv)`,
  },
  {
    id: 92,
    author: ` confucius`,
    quote: `it does not matter how slowly you go as long as you do not stop. - (philippians 4:13, esv)`,
  },
  {
    id: 93,
    author: ` maya angelou`,
    quote: ` if you don't like something, change it. if you can't change it, change your attitude. - (philippians 4:8, esv)`,
  },
  {
    id: 94,
    author: `oscar wilde`,
    quote: `to live is the rarest thing in the world Most people exist, that is all." (Micah 6:8)`,
  },
  {
    id: 95,
    author: `albert einstein`,
    quote: `imagination is more important than knowledge. for knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. - (2 corinthians 5:7, esv)`,
  },
  {
    id: 96,
    author: ` albert schweitzer`,
    quote: `success is not the key to happiness. happiness is the key to success. if you love what you are doing, you will be successful. - (joshua 1:8, esv)`,
  },
  {
    id: 97,
    author: `george bernard shaw`,
    quote: `life isn't about finding yourself. life is about creating yourself. - (genesis 1:27, esv)`,
  },
  {
    id: 98,
    author: `socrates`,
    quote: `an unexamined life is not worth living. - (2 corinthians 13:5, esv)`,
  },
  {
    id: 99,
    author: `albert einstein`,
    quote: `creativity is intelligence having fun. - (genesis 1:1, esv)`,
  },
  {
    id: 100,
    author: `albert einstein`,
    quote: `i have no special talents. i am only passionately curious. - (philippians 4:13, esv)`,
  },
  {
    id: 101,
    author: `lao tzu`,
    quote: `the journey of a thousand miles begins with one step. - (psalm 37:23, esv)`,
  },
  {
    id: 102,
    author: `albert einstein`,
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle Jeremial 32:17`,
  },
  {
    id: 152,
    author: `johann wolfgang von goethe`,
    quote: `whatever you can do or dream you can, begin it. boldness has genius, power, and magic in it. - (Psalm 37:23, ESV)`,
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newquote = document.querySelector(".newquote");

let currentItem = 0;
function randomquote() {
  const item = allQuotes[currentItem];
  author.textContent = item.author;
  quote.textContent = item.quote;
  currentItem = Math.floor(Math.random() * allQuotes.length);
}


// toggle


newquote.addEventListener("click", randomquote);



// toggle functionality

toggleBtn = document.querySelector(".toggle_btn");
dropdown = document.querySelector(".dropdown_menu ");
const breakpoint=768

toggleBtn.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
// toggleBtn.addEventListener('click',function () {
//   if (dropdown.classList.contains('active')) {
//     dropdown.classList.remove('active')

//   }else{dropdown.classList.add('active')}
// }) 
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove("active");
  }
}
window.addEventListener('resize', handleResize)
window.addEventListener('DOMContentLoaded',handleResize)