/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/
function isValidIP(str) {
    let octets = str.split(".");
    if(octets.length > 4 || octets.length <4)
    {
      return false;
    }
    for(octet of octets)
    {
      if(octet == "")
      {
        return false;
      }
      if(parseInt(octet) > 255)
      {
        return false;
      }
      let numbers = octet.split('')
      if(numbers[0] == "0" && numbers.length > 1)
        {
          return false;
        }
      for(number of numbers)
      {
      if(isNaN(parseInt(number)))
        {
          return false;
        }
      }
    }
    return true;
  }