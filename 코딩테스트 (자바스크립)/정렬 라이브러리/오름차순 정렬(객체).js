let arr = [ 
  {name : "홍길동", score: 89},
  {name : "강철수", score: 75},
  {name: "오준석", score: 99}
]

function compare(a,b) {
  return b.score-a.score;
}
arr.sort(compare);

console.log(arr);