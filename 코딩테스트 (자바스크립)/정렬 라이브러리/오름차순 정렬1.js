let arr = [1, 8, 5, 9, 21, 3, 12, 3, 55]

function compare(a,b) {
  if (a<b) return -1;
  else if (a>b) return 1;
  else return 0;
}

arr.sort(compare)
console.log(arr)