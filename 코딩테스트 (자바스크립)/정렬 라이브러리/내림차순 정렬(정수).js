let arr = [1, 8, 5, 9, 22, 3, 7, 13]

function compare(a,b) {
  return b-a
}

arr.sort(compare);
console.log(arr);