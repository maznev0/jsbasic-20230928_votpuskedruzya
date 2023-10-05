function ucFirst(str) {
  if (str.lenght === 1) return str.toUpperCase();
  if (!str) return str;
  else return ( str[0].toUpperCase() + str.slice(1) );
}
