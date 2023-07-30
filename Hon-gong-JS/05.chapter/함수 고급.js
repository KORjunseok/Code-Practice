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

// 배열의 메소드와 화살표 함수 
// 배열 선언
let numbers5 = [0,1,2,3,4,5,6,7,8,9]
// 배열의 메소드를 연속적으로 사용
numbers5
.filter((value) => value % 2 ===0)
.map((value) => value * value)
.forEach((value) => {
console.log(value)
})

// 타이머 걸기
// setTimeout(() => {
//   console.log('1초 후에 실행됩니다')
// }, 1 * 1000)
// let count = 0
// setInterval(() => {
//   console.log(`1초마다 실행됩니다(${count}번째)`)
// }, 1*1000);

// 타이머 취소하기
// let id
// id = setInterval(() => {
//   console.log(`1초마다 실행됩니다(${count}번째)`)
//   count++
// }, 1 * 1000);
// setTimeout(() => {
//   console.log('타이머를 종료합니다.')
//   clearInterval(id)  
// }, 5 * 1000);

// 블록과 함수 블록을 사용해 이름 충돌 문제 해결하기 
let pi = 3.14 
console.log(`파이 값은 ${pi}입니다.`)
// 블록을 사용한 스코프 생성
{
  let pi = 3.141592
console.log(`파이 값은 ${pi}입니다.`)
}
console.log(`파이 값은 ${pi}입니다.`)
// 함수 블록을 사용한 스코프 생성
function sample() {
  let pi = 3.1415922222
  console.log(`파이 값은 ${pi}입니다.`)
}
sample()
console.log(`파이 값은 ${pi}입니다.`)

// 즉시 호출 함수를 사용한 문제 해결 
// let pi2 = 3.14
// console.log(`파이 값은 ${pi2}입니다.`)
//   (function () {
//     let pi2 = 3.141592
//     console.log(`파이 값은 ${pi2}입니다.`)
//   })()

// 엄격모드에서 선언 없이 변수 사용
// `use strict`
// data = 10
// console.log(data)

// 익명 함수 호출
// 변수 선언
let 익명함수
// 익명 함수를 2번 생성
익명함수 = function () {
  console.log(`1번쨰 익명 함수입니다.`)
}
익명함수 = function () {
  console.log('2번째 익명 함수입니다.')
}
// 익명함수 호출
익명함수()

// 선언적 함수 호출
// 선언적함수()
// // 선언적 함수를 2번 생성
// function 선언적함수 () {
//   console.log(`1번쨰 선언적 함수입니다.`)
// }
// function 선언적함수 () {
//   console.log(`2번쨰 선언적 함수입니다.`)
// }

// 선언적 함수와 익명 함수의 조합
// 익명 함수 생성
함수 = function () {
  console.log(`익명 함수입니다.`)
}
// 선언적 함수 생성하고 할당
function 함수 () {
  console.log(`선언적 함수입니다.`)
}
// 함수 호출
함수()

// 블록이 다른 경우 선언적 함수의 사용
선언적함수()
function 선언적함수 () {
  console.log(`1번쨰 선언적 함수입니다.`)
}
function 선언적함수 () {
  console.log(`2번쨰 선언적 함수입니다.`)
}
선언적함수()