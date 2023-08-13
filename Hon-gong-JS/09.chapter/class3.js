// // ㅇ 정사각형 클래스
// class Square {
//   constructor (length) {
//     this.length = length
//   }
//   getPerimeter () {return 4 * this.length}
//   getArea () {return this.length * this.length}
// }
// // 클래스 사용
// const square = new Square (-10)
// console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
// console.log(`정사각형의 넓이: ${square.getArea()}`)

// ㅇ 길이에 음수가 들어기지 않게 수정
// 정사각형 클래스
class Square {
  constructor (length) {
    if (length <= 0) {
      throw '길이는 0보다 커야 합니다.' // throw 키워드를 사용해서 강제로 오류 발생시킴
    }
    this.length = length
  }
  getPerimeter () {return 4 * this.length} 
  getArea () { return this.length * this.length}
}
// 클래스 사용
const square = new Square (-10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)