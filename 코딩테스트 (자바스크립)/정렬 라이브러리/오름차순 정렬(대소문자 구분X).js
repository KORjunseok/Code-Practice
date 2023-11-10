let arr = [ "fineapple", "Banana", "durian", "apple", "carrot"];

function compare(a,b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA>upperCaseB) return 1;
  else return 0;
}

arr.sort(compare);
console.log(arr)
