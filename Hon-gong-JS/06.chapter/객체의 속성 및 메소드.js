// ㅇ 프로토타입으로 숫자 메소드 추가
// power () 메소드 추가
Number.prototype.power = function (n = 2) {
  return this.valueOf() ** n
}
// Number 객체의 power() 메소드 사용
// const a = 12
// console.log(`a.power():`, a.power())
// console.log(`a.power(3):`, a.power(3))
// console.log(`a.power(4):`, a.power(4))

// ㅇ 프로토타입으로 문자열 메소드 추가
// contain() 메소드 추가
String.prototype.contain = function (data) {
  return this.indexOf(data) >= 0
}
Array.prototype.contain = function (data) {
  return this.indexOf(data) >= 0
}
// String 객체의 contain() 메소드 사용
const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'))
console.log('없는데 in 안녕하세요:', a.contain('없는데'))
// Array 객체의 contain() 메소드 사용
const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52]:', b.contain(273))
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0))

// ㅇ JSON.stringify() 메소드
// 자료 생성
// const data = [{
//   name : '혼자 공부하는 파이썬',
//   price : 18000,
//   publisher : '한빛미디어',
// }, {
//   name : 'HTML5 웹 프로그래밍 입문',
//   price : 26000,
//   publisher : '한빛미디어'
// }]
// // 자료 JSON으로 변환
// console.log(JSON.stringify(data))
// console.log(JSON.stringify(data, null, 2))

// ㅇ JSON.parse() 메소드
// 자료 생성
const data = [{
  name : '혼자 공부하는 파이썬',
  price : 18000,
  publisher : '한빛미디어',
}, {
  name : 'HTML5 웹 프로그래밍 입문',
  price : 26000,
  publisher : '한빛미디어'
}]
// 자료 JSON으로 변환
const json = JSON.stringify(data)
console.log(json)
// JSON 문자열을 다시 자바스크립트 객체 변환
console.log(JSON.parse(json))

// ㅇ Math.random() 메소드
const num = Math.random()

console.log('# 랜덤한 숫자')
console.log('0-1 사이의 랜덤한 숫자:', num)
console.log('')

console.log('# 랜덤한 숫자 범위 확대')
console.log('0~10 사이의 랜덤한 숫자:', num * 10)
console.log('0~50 사이의 랜덤한 숫자:', num * 50)
console.log('')

console.log('# 랜덤한 숫자 범위 이동')
console.log('-5~5 사이의 랜덤한 숫자:', num * 10 -5)
console.log('-25~25 사이의 랜덤한 숫자:', num * 50 -25)
console.log('')

console.log('# 랜덤한 정수 숫자')
console.log('-5~5 사이의 랜덤한 정수 숫자:', Math.floor(num * 10 -5))
console.log('-25~25 사이의 랜덤한 정수 숫자:', Math.floor(num * 50 -25))













