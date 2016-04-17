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

function confirmEnding(str, target) {
  return str.substr(str.length-target.length) == target;
}
confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  var rer = '';
  for (var i=0;i<num;i++){
    rer += str;
  }
  return rer;
}
repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  if (str.length > num){
    if (num <=3 ){
      return str.slice(0, num) + '...';
    }
    return str.slice(0, num-3) + '...';
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

function chunkArrayInGroups(arr, size) {
  var rer = []
  for (var i=0; i<arr.length; i+=size){

    rer.push(arr.slice(i, i+size));
  }
  return rer;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

function slasher(arr, howMany) {
  for (var i=0; i<howMany; i++){
    arr.shift();
  }
  return arr;
}
slasher([1, 2, 3], 2);

function mutation(arr) {
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  for (var i=0; i<arr[1].length; i++){
    if(arr[0].indexOf(arr[1][i]) < 0){
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);


function bouncer(arr) {
  return arr.filter(function (val){
    if (val){
      return true;
    } else {
      return false;
    }
  });
}
bouncer([7, "ate", "", false, 9]);

function destroyer(arr) {
  var args = Array.from(arguments)
  var rer = args[0];
  return rer.filter(function (val){
      for (var j=1;j<args.length;j++){
        if (val==args[j]){
          return false;
        }
      }
      return true;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function getIndexToIns(arr, num) {
  arr = arr.sort(function (prev, current){
    return prev-current;
  });
  for (var i=0; i<arr.length; i++){
    if (num <= arr[i]){
      break;
    }
  }
  return i;
}
getIndexToIns([40, 60], 50);

function rot13(str) { // LBH QVQ VG!
  var decipher = '';
  for (var i in str){
    // For Non-alphabetic characters.
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91){
      decipher += str[i];
      continue;
    }
    // for Char A-M loop back over Z add 13.
    if (str.charCodeAt(i) < 78){
      decipher += String.fromCharCode(str.charCodeAt(i) + 13);
    } else {
      // for N-Z
      decipher += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  return decipher;
}
rot13("SERR PBQR PNZC");
