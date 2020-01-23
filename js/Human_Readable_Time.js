/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable(seconds) {
  let hours = 0;
  let minutes = 0;
  let sec = seconds;
  while(sec>=3600)
  {
    sec = sec - 3600;
    hours++;
  }
  while(sec>=60)
  {
    sec = sec - 60;
    minutes++;
  }
  let h = hours.toString();
  let m = minutes.toString();
  let s = sec.toString();
  if(hours < 10)
  {
    h = "0" + hours.toString();
  }
  if(minutes < 10)
  {
    m = "0" + minutes.toString();
  }
  if(sec < 10)
  {
    s = "0" + sec.toString();
  }
  result = h + ":" + m + ":" + s;
  return result;
}