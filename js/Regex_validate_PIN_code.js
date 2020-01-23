/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/
function validatePIN (pin) {
  let counter = 0;
  let digits = pin.split('');
  for(digit = 0; digit<digits.length; digit++)
  {
    let d = parseInt(digits[digit]);
    if(isNaN(d))
    {
      return false;
    }
    counter++;
  }
  if(counter == 4 || counter == 6)
    {
      return true;
    }
  return false;
}