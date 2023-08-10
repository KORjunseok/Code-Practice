// ㅇ 클래스 선언하고 인스턴스 생성
// 클래스 선언
// class Student {

// }
// 학생 선언
// const student = new Student()
// 학생 리스트 선언
// const students = [
//   new Student(),
//   new Student(),
//   new Student(),
//   new Student()
// ]

// ㅇ 생성자 함수와 속성 추가 
class Student {
  constructor (이름, 국어, 영어, 수학, 과학) {
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
    this.과학 = 과학
  }
  // ㅇ 메소드 추가
getSum () {
  return this.국어 + this.영어 + this.수학 + this.과학
}
getAverage () {
  return this.getSum() / 4
}
toString () {
  return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
}
}
// 객체 선언 
const students = []
students.push(new Student('구름', 87, 98, 88, 90))
students.push(new Student('별이', 92, 98, 96, 88))
students.push(new Student('겨울', 76, 96, 94, 86))
students.push(new Student('바다', 98, 52, 98, 92))
// 출력
let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += s.toString()
}
console.log("이게 맞아?", output)