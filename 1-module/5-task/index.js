function truncate(str, maxlength) {
  // if (str.length > maxlength) return ( str.slice(0, maxlength - '…'.length) + '…' );
  if (str.length > maxlength) return ( str.substr(0, maxlength - '…'.length) + '…' );
  else return str;
}
