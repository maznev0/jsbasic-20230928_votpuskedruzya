function factorial(n) 
{
  let result = 1;
  if (n == 0) return result;
  else
  {
    for (let i = 1; i < n + 1; i++)
    {
      result *= i;
    }
    return result;
  }
}
