// ㅇ 콜백함수 (1): 선언적 함수 사용하기
// 함수 선언
function callThreeTimes (callback) {
  for (let i =0; i < 3; i++) {
    callback(i)
  }
}
function print (i) {
  console.log(`${i}번째 함수 호출`)
}
// 함수 호출
callThreeTimes(print)

// ㅇ 콜백함수 (2): 익명 함수 사용하기 
// 함수 선언
function callThreeTimes2 (callback) {
  for (let i = 0; i < 3; i++) {
    callback(i)
  }
}
// 함수 호출
callThreeTimes2(function(i) {
  console.log(`${i}번째 함수 호출`)
})

// ㅇ 배열의 forEach() 메소드
const numbers = [273, 52, 103, 32, 57]
numbers.forEach(function (value, index, array) {
  console.log(`${index}번째 요소 : ${value}`)
})

// ㅇ 배열의 map() 메소드
// 배열 선언
let numbers2 = [273, 52, 103, 32, 57]
// 배열의 모든 값 제곱
numbers2 = numbers2.map(function (value, index, array) {
  return value * value
})
numbers2.forEach(console.log)

// ㅇ 원하는 매개변수만 받기
// 배열 선언
let numbers3 = [270,55,103,33,66]
// 배열의 모든 값 제곱
numbers3 = numbers3.map(function(value) {
  return value * value
})
// 출력 
numbers3.forEach(console.log)

// ㅇ 배열의 filter() 메소드
const numbers4 = [0,1,2,3,4,5]
const evenNumbers = numbers4.filter(function (value) {
  return value % 2 === 0
})
console.log(`원래 배열: ${numbers4}`)
console.log(`짝수만 추출: ${evenNumbers}`)












