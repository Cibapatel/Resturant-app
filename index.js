var quote=[ "\“Life is uncertain. Eat dessert first.\”" + "<br>"+"- Ernestine Ulmer",
"\“Food is symbolic of love when words are inadequate.\”" + "<br>"+"– Alan D. Wolfelt",
"\"I know once people get connected to real food, they never change back.\""+"<br>" +"– Alice Waters",
'\"Food brings people together on many different levels. It\’s nourishment of the soul and body; it\’s truly love.\"'+"<br>"+"– Giada De Laurentiis",
"\“The best comfort food will always be greens, cornbread, and fried chicken.\”"+"<br>"+"– Maya Angelou",
"\“To me, food is as much about the moment, the occasion, the location and the company as it is about the taste.\""+"<br>"+
"– Heston Blumenthal",
"\“You don’t need a silver fork to eat good food.\”" +"<br>"+"– Paul Prudhomme",
"\“All happiness depends on a leisurely breakfast.\”"+"<br>"+" –John Gunther",
"\“Food is not rational. Food is culture, habit, craving and identity.\”"+"<br>"+" – Jonathan Safran Foer",
"\“The belly rules the mind.\”"+"<br>"+" – Spanish Proverb"
]
   

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quote.length));
document.getElementById("quotedisplay").innerHTML = quote[randomNumber];

}