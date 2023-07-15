// // 함수 20개 만들어 보기 

// // 1번 더하기
// function add (a,b) {
//   return a + b ;
// }
// console.log(add(1,2))

// // 2번 마이너스 
// function minus (요거, 저거) {
//   return 요거 - 저거;
// }
// console.log(minus(1,2))

// // 3번 곱하기 
// function Multiplication(정수, 음수) {
//   return 정수 * 음수 * 100 ; 
// }
// console.log(Multiplication(10,-3))

// // 4번 나누기
// function division (뚱땡이, 비실이) {
//   return 뚱땡이 / 비실이
// }
// console.log(division(100,60))

// // 5번 사칙연산 
// function multi (a, b, c, d) {
//   return a + b - c * d;
// }
// console.log(multi(10,20,30,10));

// // 6번 화살표 함수 
// const arrow = (석궁, 화살) => {
//   return 석궁 != 화살;
// }
// console.log(arrow(30,4))

// // 7번 화살표 함수 ver.2 
// const arr = (뚱이, 비실이) => {
//   return 뚱이 > 비실이 + " : kg으로 뚱이가 더 나감"
// }
// console.log(arr(130,120))

// // 8번 화살표
// const hot = (여름, 겨울) => {
//   return 여름 - 겨울 ;
// }
// console.log(hot(30,5))
// console.log("여름이 겨울보다" + hot(30,5) + " 도만큼 높다.")

// // 9번 화살표 
// const reading = (six, seven) => { 
//   return six + seven 
// }
// console.log("나의 2달간 독서량 : " + reading(4,2))


// // 10번 화살표 
// const mental = (물, 마심) => {
//   return 물+마심;
// }
// console.log(mental(30, 21))

// // 11번 화살표
// const angry = (a, b) => {
//  return a !== "코코볼" && b !== "말아 먹기";
// }
// console.log(angry("코코볼1", "말아 먹기1"))

// // 12번 축약 
// const add2 = (a, c) => a + c;
// console.log(add2(3,12))

// //13번 더 축약
// const add3 = a => a + 15 + 30 + add2(5,20);
// console.log(add3(3))

// //14번 화살표
// const addfin = (add2, add3) => {
//   return add2(6,15) - add3(30)
// }
// console.log(addfin)

// // 15번 파이널
// const final = (잭, 스) => {
//   return 잭 ===30 || 스===10 
// }
// console.log(final(31,11))

// 점수 계산기 (수우미양가) 수는  90 오버 / 우는 80 오버 / 미는 70 오버 / 양은 60 오버 / 나머지 가
// let a = 45
// if (a >= 90) {
//   console.log("수입니다.")
// } else if ( a >= 80) {
//   console.log("우입니다.")
// } else if ( a >= 70) {
//   console.log("미입니다.")
// } else if ( a >= 60) {
//   console.log("양입니다.")
// } else               {
//   console.log("가입니다.")
// }

// 구구단 만들어 오기 1단
// for (let i = 1; i < 10; i = i+1) {
//   console.log("구구단을 외자 : " + 1 + "곱하기"+ i +  "은" + i)
// }
// 2단
// let a = 1
// for (let i = 2; i < 20; i = a++ *2) {
//   console.log(i)
// }

// for (let i = 0; i < 100; i = i+2) {
//   console.log(i)
// }

