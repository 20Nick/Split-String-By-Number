function split(text, n){
  var splitText = [];
  for (var i = 0; i <= text.length; i = i+n) {
    splitText.push(text.substring(i, n+i));
  }
  return splitText;
}
