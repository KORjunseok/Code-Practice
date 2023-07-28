// ㅇ 익명 함수 선언하기
// 변수 생성
// const 함수 = function () {
//   console.log("함수 내부의 코드입니다 ... 1")
//   console.log("함수 내부의 코드입니다 ... 2")
//   console.log("함수 내부의 코드입니다 ... 3")
//   console.log("")
// }
// // 함수 호출
// 함수()
// 함수()
// //출력
// console.log(typeof 함수)
// console.log(함수)

// ㅇ 선언적 함수 선언하기
// 함수 생성
function 함수  () {
  console.log("함수 내부의 코드입니다 ... 1")
  console.log("함수 내부의 코드입니다 ... 2")
  console.log("함수 내부의 코드입니다 ... 3")
  console.log("")
}
// 함수 호출
함수()
함수()
//출력
console.log(typeof 함수)
console.log(함수)

// ㅇ 기본 형태의 함수 만들기
// 함수 선언
function f(x) {
  return x * x
}
// 함수 호출
console.log(f(3))

// ㅇ 윤년을 확인하는 함수 만들기. 
// 4로 나누어 떨어지는 해는 윤년, 100으로 나누어 떨어지는 해는 윤년이 아님, 400으로 나누어 떨어지는 해는 윤년
function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)
}
console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`)
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`)
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`)

// ㅇ a부터 b까지 더하는 함수
function sumAll(a,b) {
  let output = 0
  for (let i = a; i <= b; i++) {
    output += i
  }
  return output
}
console.log(`1부터 100까지의 합 : ${sumAll(1, 100)}`)
console.log(`1부터 500까지의 합 : ${sumAll(1, 500)}`)

// function 함수(매개변수) {
//   let output = 초깃값
//   처리한다
//   return output
// }

// ㅇ 최솟값을 구하는 함수 
function min(array) {
  let output = array[0]
  for (const item of array) {
    // 현재 output보다 더 작은 item이 있다면
    if (output > item) {
      // output의 값을 item으로 변경
      output = item
    }
  }
  return output
}
const testArray = [52,273,32,103,275,24,57]
console.log(`${testArray} 중에서 `)
console.log(`최솟값 = ${min(testArray)} `)

// ㅁ 내가 해보는 최댓값 함수 만들기 
function max(array) {
  let output = array[0]
  for (const item of array) {
    // 현재 output보다 더 큰 item이 있다면
    if (output < item) {
      // output의 값을 item으로 변경
      output = item
    }
  }
  return output
}
console.log(`최댓값 = ${max(testArray)} `)

// 나머지 매개변수를 사용한 배열 만들기 
function sample(...items) {
  console.log(items)
}
sample(1,2)
sample(1,2,3)
sample(1,2,3,4)

// 나머지 매개변수를 사용한 min() 함수
function min(...items) {
  // 매개변수 items는 배열처럼 사용합니다.
  let output = items[0]
  for (const item of items) {
    if (output > item) {
      output = item
    }
  }
  return output
}
// 함수 호출하기
console.log(`min(52,273,32,103,275,24,57)`)
console.log(`= ${min(52,273,32,103,275,24,57)}`)

// ㅇ 나머지 매개변수와 일반 매개변수 
// function 함수 이름(매개변수, 매개변수, ...나머지 매개변수) {}
function sample(a, b, ...c) {
  console.log(a, b, c)
}
sample(1,2)
sample(1,2,3)
sample(1,2,3,4)

// 매개변수의 자료형에 따라 다르게 작동되는 min() 함수
function min(first, ...rests) {
  // 변수 선언
  let output
  let items
  // 매개변수의 자료형에 따라 조건 분기하기
  if (Array.isArray(first)) {
    output = first[0]
    items = first
 } else if (typeof(first) === 'number') {
  output = first 
  items = rests
 }
 // 이전 절에서 살펴보았던 최솟값 구하는 공식
 for (const item of items) {
  if (output > item) {
    output = item
  }
 }
 return output
}
console.log(`min(배열): ${min(52,273,32,103,275,24,57)}`)
console.log(`min(숫자, ...): ${min(52,273,32,103,275,24,57)}`)

// ㅇ 전개 연산자의 활용
// 단순하게 매개변수를 모두 출력하는 함수
function sample(...items) {
  console.log(items)
}
// 전개 연산자 사용 여부 비교하기
const array = [1, 2, 3, 4]

console.log('# 전개 연산자를 사용하지 않은 경우')
sample(array)
console.log('# 전개 연산자를 사용한 경우')
sample(...array)

// ㅇ 기본 매개변수의 활용
function earnings (name, wage=8590, hours=40) {
  console.log(`# ${name} 님의 급여정보`)
  console.log(`- 시급 : ${wage}원`)
  console.log(`- 근무 시간 : ${hours}시간`)
  console.log(`- 급여 : ${wage * hours}원`)
  console.log('')
}
// 최저임금으로 최대한 일하는 경우
earnings('구름')
//시급 1만원으로 최대한 일하는 경우
earnings('별', 10000)
// 시급 1만원으로 52시간 일한 경우
earnings('인성', 10000, 52)

// ㅇ 기본 매개변수를 추가한 윤년 함수 
function isLeapYear(year=new Date().getFullYear()) {
  console.log(`매개변수 year: ${year}`)
  return (year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)
}
console.log(`올해는 윤년일까? === ${isLeapYear()}`)

// arguments를 사용한 가변 매개변수 함수 
function sample() {
  console.log(arguments)
  for (let i = 0; i < arguments.length; i++) {
    console.log(`${i}번째 요소 : ${arguments[i]}`)
  }
}
sample(1,2)
sample(1,2,3)
sample(1,2,3,4)

// 전개 연사자가 없던 구 버전에서 apply(함수) 사용하기
// 단순하게 매개변수를 모두 출력하는 함수
function sample2(...items) {
  console.log(items)
}
// 전개 연산자 사용 여부 비교하기
const array2 = [1,2,3,4]
console.log(sample2.apply(null, array2))

// 구 버전 자바스크립트에서 기본 매개변수 구현하기
function earnings (wage, hours) {
  wage = typeof(wage) != undefined ? wage : 8590
  hours = typeof(hours) != undefined ? hours : 52
  return wage * hours
}
function earnings (wage, hours) {
  wage = wage || 8590
  hours = hours || 52
  return wage * hours
}

// ㅁ A부터 B까지 범위를 지정했을 때 범위안의 숫자를 모두 곱하는 함수 만들기
function multiplyAll (a, b) { 
  let output = 1 
  for (let i = a; i <= b; i++) {
    output *= i
  }
  return output   
}
console.log(multiplyAll(1,20))
console.log(multiplyAll(1,3))

// ㅁ 다음 과정에 따라 최대값을 찾는 max() 함수를 만들어보라
const max2 = function (array) {
  let output = array[0]
  for (const data of array) {
    if (output < data) {
      output =data 
    }
  }
  return output
}
console.log(max2([1,2,3,4]))

const max3 = function (...array) {
  let output = array[0]
  for (const data of array) {
    if (output < data) {
      output = data
    }
  }
  return output
}
console.log(max3([1,2,3,4]))

const max4 = function (first, ...rests) {
  let output
  let items 
  if (Array.isArray(first)) {
    output =first[0]
    items = first
  } else if (typeof(first) === 'number') {
    output = first 
    items = rests
  }
  for (const data of items) {
    if (output < data) {
      output = data
    }
  }
  return output
}
console.log(`max(배열): ${max([1,2,3,4])}`)
console.log(`max(숫자, ...): ${max([1,2,3,4])}`)