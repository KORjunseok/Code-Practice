let arr = [
  "fineapple",
  "Banana",
  "Durian",
  'Apple',
  'carrot'
]

function compare(a,b) {
  if (a>b) return -1;
  else if (a<b) return 1;
  else  return 0;
}

arr.sort(compare);
console.log(arr);
