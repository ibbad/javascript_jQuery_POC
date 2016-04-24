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

/* Pig Latin */
function translatePigLatin(str) {
  if (!isConsonant(str[0])){
    return str+'way';
  }
  for(var i=0; i <str.length; i++){
    if (isConsonant(str[i])){
      return str.substr(0, i-1) + str.substr(i+1, str.length) + str[i] + 'ay';
    }
  }
}

function isConsonant(character){
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var isVowel = false;
  for (var i=0; i<vowel.length; i++){
     if (character == vowel[i]){
       isVowel=true;
     }
  }
  return !isVowel;
}
translatePigLatin("consonant");
translatePigLatin("glove");

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


function sumAll(arr) {
  var rer = 0;
  for (var i=Math.min.apply(null, arr); i<=Math.max.apply(null, arr); i++){
    rer += i;
  }
  return rer;
}
sumAll([1, 4]);

function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = newArr.concat(arr1.filter(function (val){
         for (var i=0;i<arr2.length;i++){
           if (val==arr2[i]){
             return false;
          }
        }
        return true;
      })
  );
  newArr = newArr.concat(arr2.filter(function (val){
        for (var i=0;i<arr1.length;i++){
          if (val==arr1[i]){
            return false;
          }
        }
        return true;
      })
  );
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*Convert a number to Roman form.*/
function convertToRoman(num) {
  if (!+num)
     return false;
  var digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
convertToRoman(36);


function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  key = Object.keys(source);
  for(var i=0; i<collection.length;i++){
    var valid=true;
    for (var j=0;j<key.length;j++){
      console.log(collection[i].hasOwnProperty(key[j]));
      console.log(collection[i][key[j]]==source[key[j]]);
      if (!collection[i].hasOwnProperty(key[j]) || collection[i][key[j]]!==source[key[j]]){
        valid=false;
      }
    }
    if (valid===true){
      arr = arr.concat(collection[i]);
    }
  }
  return arr;
}
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*Replace a word(before) with another(after) in a string(str)*/
function myReplace(str, before, after) {
  var re = new RegExp(before,"gi");
  if (isUpper(before[0])){
    return str.replace(re, capitalize(after));
  }
  return str.replace(re, after);
}

/* Checks if the character is uppercase (true) or lowercase (false) */
function isUpper(character){
  return character == character.toUpperCase();
}

/* Capitalize a string i.e. capitalize("potato") --> Potato */
function capitalize(str){
  return str[0].toUpperCase() + str.substr(1, str.length).toLowerCase();
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


/* DNA Base-Pairs */
function pairElement(str) {
  var combi = [];
  var lookup = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
  }
  for (var i=0;i<str.length;i++){
    var arr = [str[i], lookup[str[i]]];
    combi.push(arr);
  }
  return combi;
}
pairElement("GCG");


function uniteUnique() {
    return [].concat.apply([], arguments).filter(function(elem, index, self) {
        return self.indexOf(elem) === index;
    });
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");


function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}
sumFibs(1000);

