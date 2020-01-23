/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
var moveZeros = function (arr) {
  let result = [];
  let ZeroCounter = 0;
  arr.forEach(function (elem, id)
  {
    if(elem === 0)
    {
      ZeroCounter++;
    }
    else
    {
      result.push(elem);
    }
  });
  for(i = 0; i < ZeroCounter; i++)
  {
    result.push(0);
  }
  return result;
}