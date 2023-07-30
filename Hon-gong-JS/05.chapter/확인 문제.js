// 1번 filter 함수의 콜백 함수 부분을 채워서 1. 홀수만 추출, 2. 100 이하의 수만 추출, 
// 5로 나눈 나머지가 0인 수만 추출 
let numbers6 = [273, 25, 75, 52, 103, 32, 57, 24, 76]
// 처리 
// (1) 홀수만 추출
numbers6 = numbers6.filter((x) => x % 2  ===1)
// (2) 100 이하의 수만 추출
numbers7 = numbers6.filter((x) => x <=100)
// (3) 5로 나눈 나머지가 0인 수만 추출
numbers8 = numbers6.filter((x) => x % 5 === 0)
// 출력 
console.log(numbers6)
console.log(numbers7)
console.log(numbers8)

// 2번 배열의 forEach 메소를 사용하는 형태로 변경해 주세요
const array = ['사과', '배', '귤', '바나나']
console.log(`# for in 반복문`)
array.forEach((item, i) => {
  console.log(i)
})
console.log(`# for of 반복문`)
array.forEach((item, i,) => {
  console.log(item)
})
