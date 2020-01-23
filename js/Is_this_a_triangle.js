/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
function isTriangle(a,b,c)
{
  if(a<c && b<c)
  {
    if(a+b>c)
    {
      return true;
    }
    return false;
  }
  if(b<a && c<a)
  {
    if(b+c>a)
    {
      return true;
    }
    return false;
  }
  if(a<b && c<b)
  {
    if(a+c>b)
    {
      return true;
    }
    return false;
  }
  if(a==b || b==c || a == c)
  {
    return true;
  }
}