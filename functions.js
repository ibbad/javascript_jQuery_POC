function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  var reversed = '';
  for (var i=str.length; i>0; i--){
    reversed += str[i-1];
  }
  return str == reversed;
}
palindrome('Eye');

function factorialize(num) {
  var factorial=1;
  for (var i=num; i>0; i--){
    factorial *= i;
  }
  return factorial;
}
factorialize(1234);

function reverseString(str) {
  var reversed = "";
  for(var i=str.length;i>0;i--){
    reversed+=str[i-1];
  }
  return reversed;
}
reverseString("Potato");

function findLongestWord(str) {
  var words = str.split(' ');
  var lngst = words[0].length;
  for (var i = 0; i < words.length; i++){
    if (words[i].length > lngst){
      lngst = words[i].length;
    }
  }
  return lngst;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  var words = str.split(' ');
  for (var i=0;i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(' ');
}

titleCase("I'm a little tea pot");

function largestOfFour(arr) {
  var largest = [];
  for (var i=0; i< arr.length; i++){
    var l = arr[i][0];
    for (var j =0; j<arr[i].length; j++){
      if (arr[i][j]>l){
        l=arr[i][j];
      }
    }
    largest.push(l);
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
