// let username : string = "seungkyoo"; // 문자열
// let height : number = 179; // 숫자
// let isConitonGood : boolean = true ; // 불리언

// let myInfo : {name:string; height:number; isConditionGood: boolean} = {
//   name : "seungkyoo",
//   height:179,
//   isConditionGood : true
// }

// let myInfoWithGender : {
//   name :string
//   height : number
//   isConditionGood : boolean
//   gender? : string // 선택적 속성 
// } = {
//   name : "OJS",
//   height : 180,
//   isConditionGood : true
// }

// const one: number = 1; // 숫자 타입
// const myName: string = "seungkyoo"; // 문자열 타입
// const trueOrFalse : boolean = true; // boolean 타입
// const UnIntended: undefined = undefined // underfined 타입
// const nullable: null = null; // null 타입
// const bigNumber: bigint = 1234567890123456789011112n; // bigint 타입
// const symbolValue: symbol = Symbol("symbol"); // symbol 타입 

// console.log(one + 1); // 2
// console.log(myName + "is my name"); // seungkyo is my name
// console.log(trueOrFalse ? "true" : "false") // true
// console.log(bigNumber / 100000000000000000n) // 샬라샬라 나옴 

// // 모든 값이 유일하므로 같은 값을 넣어도 false
// console.log(symbolValue === Symbol("symbol"))

// // ㅇ 배열과 튜플
// const numbers: number[] = [1,2,3,4,5]; // 1 숫자 배열
// const stringArray: Array<string> = ["a", "b", "c", "d", "e"] // 2 문자열 원소 
// // 3 스프레드 연산자로 합치기 가능 
// const oneToTen = [...numbers, ...numbers2];
// console.log(...oneToTen);
// // 4 객체의 배열 타입
// const idols = { name: string, birth: number }[] = [
//   {name: "minji", birth: 2004},
//   {name: "hani", birth: 2004},
//   {name: "haerin", birth:2006},
// ];
// // 5 배열의 원소가 객체인 타입
// const gameConsoleArray: Array<{ name: string; launch: number}> = [
//   {name: "플레이스테이션5", launch: 2020},
//   {name: "엑스박스 시리즈 X/S", launch: 2020},
//   {name: "닌텐도 스위치", launch: 2017},
//   {name: "스팀덱", launch: 2021},
// ]

// // 1 튜플은 원소 개수만큼 타입 정의 필요
// const myTuple : [string, number] = ["OJS", 200];
// // 2 튜플은 함수의 매개변수가 여러 개 일 때 유용
// function printMyInfo(label: string, info : [string, number]): void { 
//   console.log(`[${label}]`, ...info)
// }
// // 결괏값 : [튜플 테스트] OJS 200
// printMyInfo("튜플 테스트", myTuple)
// // 튜플을 반환하는 함수
// function fetchUser(): [string, number] {
//   return ["OJS", 200];
// }
// // 3 결괏값을 분해해서 받을 수 있음
// const [name24, height24] = fetchUser();
// console.log(name24, height24)

// ㅇ 튜플 알아보기
// 1 튜플은 원소 개수만큼 타입 정의가 필요
const myTuple: [string, number] = ["OJS", 20]
// 2 튜플은 함수의 매개변수가 여러 개 일 때 유용
function printMyInfo(lable: string, info : [string, number]): void {
  console.log(`[${lable}]`, ...info)
}
// 결괏값 : [튜플 테스트] OJS 20
printMyInfo("튜플 테스트", myTuple)
// 튜플을 반환하는 함수
function fetchUser(): [string, number] {
  return ["OJS", 20]
}
// 3 결괏값을 분해해서 받을 수 있음
const [name24, height24] = fetchUser();
console.log(name24, height24)

// ㅇ 인터섹션 타입
type cup = {
  size : string;
}

type brand = {
  brandName: string;
}

type brandedCup = cup & brand; //1 cup이면서 brand가 있는 타입
let statbucksGrandSizeCup : brandedCup = {
  brandName: "스타벅스",
  size : "grande",
}

// ㅇ 인터페이스와 타입 별칭 비교 
type BookType = { // 1 BookType 타입
  title: string;
  price: number;
  author: string;
}

interface Book { // 2 Book 인터페이스
  title: string;
  price: number;
  author: string;
}

let bookType: BookType = { // 3 BookType 타입 객체 할당
  title: "백엔드 개발자 되기",
  price: 10000,
  author: "박승규",
};

let book: Book = { // 4 Book 인터페이스 객체 할당
  title : "백엔드 개발자 되기",
  price : 10000,
  author: "박승규"
}

interface Car {
  name: string;
  price: number;
  brand: string;
  options?: string[]; // 1 차량의 옵션은 선택적 속성
}
let avante: Car = { // 2 아반떼에는 에어컨과 내비게이션의 옵션이 있음
  name: "아반떼",
  price: 1500,
  brand: "현대",
  options: ["에어컨", "네비게이션"]
}
let morning: Car = { // 3 모닝은 아무런 옵션 X 
  name: "모닝",
  price: 650,
  brand: "기아"
}

// ㅇ 다시 연습
interface Citizen { // 시민을 의미하는 인터페이스 정의 
  id: string;
  name: string;
  region: string;
  readonly age: number; // 1 나이는 변경할 수 없음
}
let seungkyoo: Citizen = { // 시티즌 인터페이스 객체 생성 
  id: "222222",
  name: "박승규",
  region: "경기",
  age: 40,
}
// seungkyoo.age = 39 // 2 age 속성은 읽기 전용(read-only)이므로 에러 

// ㅇ 인터페이스 확장하기 

