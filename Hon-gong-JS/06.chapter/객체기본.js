// ㅇ 메소드 내부에서의 this 키워드
const pet = {
  name : '구름',
  eat : function (food) {
    console.log(this.name + `은` + food + `을 먹습니다.`)
  }
}
// 메소드 호출
pet.eat(`밥`)

// ㅇ 동적으로 객체 속성 추가하기 
// 객체 선언
const student = {}
student.이름 = '오준석'
student.취미 = '코딩'
student.장래희망 = '개발자'
// 출력
console.log(JSON.stringify(student, null, 2))

// ㅇ 동적으로 객체 속성 제거 
// 객체 속성 제거 
delete student.장래희망
// 출력
console.log(JSON.stringify(student, null, 2))

// ㅇ this 키워드의 차이
// 변수 선언
const test = {
  a : function () { // 익명 함수로 선언
    console.log(this)
  },
  b : () => { // 화살표 함수로 선언
    console.log(this)
  }
}
// 메소드 호출
test.a()
test.b()

// 확인 문제
// 1 객체 선언 
const AA = {
 name : "혼자 공부하는 파이썬",
 price : 18000,
 publisher : "한빛미디어"
}
console.log(AA.price)


