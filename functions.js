function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  var reversed = '';
  for (var i=str.length; i>0; i--){
    reversed += str[i-1];
  }
  return str == reversed;
}

function factorialize(num) {
  var factorial=1;
  for (var i=num; i>0; i--){
    factorial *= i;
  }
  return factorial;
}

function reverseString(str) {
  var reversed = "";
  for(var i=str.length;i>0;i--){
    reversed+=str[i-1];
  }
  return reversed;
}

