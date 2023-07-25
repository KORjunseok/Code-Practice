// const a = 40;

// switch (a % 2) {
//   case 0:
//     console.log("짝수입니다.");
// // swith 조건문 1번
//     break;
//   case 1:
//     console.log("홀수입니다.");
//     break;
//   default:
//     console.log("숫자가 아닙니다.");
//     break;
// }

// // 2번
// const date = new Date();
// const hour = date.getHours();

// switch (true) {
//   case hour < 11:
//     console.log("아침 먹어라");
//     break;
//   case hour < 15:
//     console.log("점심 먹어라");
//     break;
//   default:
//     console.log("저녁 먹어라");
//     break;
// }

// // 3번
// const input = "numer의 값";
// const number = 40;

// if (number % 2 === 0) {
//   console.log(`${input}은 짝수입니다.`);
// } else {
//   console.log(`${input}은 홀수입니다.`);
// }

// // //4번
// const rawInput = 1994;
// const year = Number(rawInput);
// const e = year % 12;

// let result;
// if (e === 0) {
//   result = "원숭이";
// } else if (e === 1) {
//   result = "닭";
// } else if (e === 2) {
//   result = "개";
// } else if (e === 3) {
//   result = "돼지";
// } else if (e === 4) {
//   result = "쥐";
// } else if (e === 5) {
//   result = "소";
// } else if (e === 6) {
//   result = "호랑이";
// } else if (e === 7) {
//   result = "토끼";
// } else if (e === 8) {
//   result = "용";
// } else if (e === 9) {
//   result = "뱀";
// } else if (e === 10) {
//   result = "말";
// } else if (e === 11) {
//   result = "양";
// }
// console.log(`${year}년에 태어났다면 ${result} 띠입니다.`);

// // 5번
// const rawInput = 1994;
// const year = Number(rawInput);
// const tti = "원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양".split(
//   ","
// );
// console.log(`${year}에 태어났다면 ${tti[year % 12]} 띠입니다.`);

const rawInput = 1994;
const year = Number(rawInput);
const e = year % 12;

let result;
switch (e) {
  case 0:
    result = "원숭이";
    break;
  case 1:
    result = "닭";
    break;
  case 2:
    result = "개";
    break;
  case 3:
    result = "쥐";
    break;
  case 4:
    result = "소";
    break;
  case 5:
    result = "호랑이";
    break;
  case 6:
    result = "토끼";
    break;
  case 7:
    result = "돼지";
    break;
  case 8:
    result = "용";
    break;
  case 9:
    result = "뱀";
    break;
  case 10:
    result = "말";
    break;
  case 11:
    result = "양";
    break;
}

console.log(result);
