// for in 반복문
// for (const 반복 변수 in 배열 또는 객체) {
//   문장
// }
const todos = ['자바스크립트 공부', '과제 시도', '밥 먹기']
for (const i in todos) {
  console.log(`${i}번쨰 할 일 : ${todos[i]}`)
}

// for of 반복문
// for (const 반복 변수 of 배열 또는 객체) {
//   문장
// }
const todos2 = ['자바스크립트 공부', '과제 시도', '밥 먹기']
for (const todo of todos2) {
  console.log(`오늘의 할 일은 ${todo}`)
}

// for 반복문 
// for (let i = 0; i < 반복 횟수; i++) {
//     문장
// }
for (let i = 0; i < 5; i++) {
  console.log(`${i}번째 반복입니다.`)
}

let output = 0
for (let i = 1; i <= 100; i++) {
  output += i
}
console.log(`1부터 100까지 숫자를 모두 더하면 ${output}입니다.`)

// for 반복문과 배열
const todos3 = ['자바스크립트 공부', '과제 시도', '밥 먹기']
for (let i = 0; i <todos3.length; i++) {
  console.log(`${i}번째 할 일 : ${todos[i]}`)
}

// for 반복문으로 배열을 반대로 출력하기
const todos4 = ['자바스크립트 공부', '과제 시도', '밥 먹기']
for (let i = todos.length -1; i>=0; i--) {
  console.log(`${i}번째 할 일 : ${todos4[i]}`)
}

// while 반복문 
// while (불 표현식) {
//   문장
// }

// while 반복문 기본 
// let i = 0 
// while (confirm(`계속 진행하시겠습니까?`)) {
//   // 사용자가 [확인] 버튼을 클릭하면 true가 되어계속 반복합니다.
//   alert(`${i}번째 반복입니다.`)
//   i = i + 1
// }

// 배열과 함께 사용하기
let i = 0
const array = [1,2,3,4,5]
while (i < array.length) { 
  console.log(`${i} : ${array[i]}`)
  i++
}

// break 키워드 swtich 조건문이나 반복문을 벗어날 때 사용하는 키워드
// while (true) {

// } break

// continue 키워드 반복문 안의 반복 작업을 멈추고 반복문의 처음으로 돌아가 다음 반복 작업 진행
// for (let i =0; i < 5; i++) { // 반복문
//   //현재 반복 작업을 중지하고 다음 반복 작업을 수행
//   continue
//   alert(i)
// }

// 피라미드 예제 만들어보기 
// 변수를 선언 
let output2 = ''

//중첩 반복문 *중요* 피라미드 만들기
for (let i = 1; i < 10; i++) {
  for (let j = 0; j <i; j++) {
    output2 += '*'
  }
  output2 += '\n'
}

// 출력
  console.log(output2)

// 피라미드 예제 만들어보기 심화
// 변수를 선언 
let output3 = ''

// 반복문
for (let i = 1; i < 15; i++) {
  for (let j =15; j> i; j--) {
    output3 += ' '
  }
  for (let k = 0; k < 2 * i -1; k++) {
    output3 += '*'
  }
  output3 += '\n'
}

// 출력
console.log(output3)





























