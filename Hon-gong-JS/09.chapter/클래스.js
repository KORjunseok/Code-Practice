// ㅇ 객체와 배열 조합
const students = [];
students.push({ 이름: "구름", 국어: 87, 영어: 98, 수학: 88, 과학: 90 });
students.push({ 이름: "별이", 국어: 92, 영어: 98, 수학: 96, 과학: 88 });
students.push({ 이름: "겨울", 국어: 76, 영어: 96, 수학: 94, 과학: 86 });
students.push({ 이름: "바다", 국어: 98, 영어: 52, 수학: 98, 과학: 92 });
// 출력
console.log(JSON.stringify(students, null, 2));

// ㅇ 객체를 처리하는 함수(1) 성적 총합과 성적 평균
// 객체를 처리하는 함수 선언
function getSumOf(student) {
  return student.국어 + student.영어 + student.수학 + student.과학;
}
function getAverageOf (student) {
  return getSumOf(student) / 4
}
// 출력 
let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n}}`
}
console.log(output)

// ㅇ 객체를 처리하는 함수 선언(2)
// students 배열 내부의 객체 모두에 메소드를 추가
for (const student of students) {
  student.getSum = function () {
    return this.국어 + this.영어 + this.수학 + this.과학
  }


  student.getAverageOf = function () {
    return this.getSum() / 4
  }
}
// 출력 
let output2 = '이름\t총점\t평균\n'
for (const s of students) {
  output += `${s.이름}\t${s.getSum()}점\t${s.getAverageOf()}점\n`
}
console.log("아웃풋2 : ", output2)
