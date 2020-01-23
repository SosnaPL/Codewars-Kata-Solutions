/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
  let points = [];
  let SumWord = 0;
  words = x.split(" ");
  for(word of words)
  {
    letters = word.split('');
    for(letter of letters)
    {
      let ascii = letter.charCodeAt(0);
      ascii = ascii - 96;
      SumWord = SumWord + ascii;
    }
    points.push(SumWord);
    SumWord = 0;
  }
    max = points[0];
    MaxId = 0;
    for(i = 1; i < points.length; i++) 
    {
      if(points[i] > max) 
      {
          MaxId = i;
          max = points[i];
      }
    }
    return words[MaxId];
}