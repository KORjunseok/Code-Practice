// ㅇ Rectangle 클래스
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  // 사각형의 둘레를 구하는 메소드
  getPerimeter () {
    return 2 * (this.width + this.height)
  }
  // 사각형의 넓이를 구하는 메소드
  getArea () {
    return this.width * this.height
  }
}
const rectangle = new Rectangle(10, 20)
console.log(`사각형의 둘레 : ${rectangle.getPerimeter()}`)
console.log(`사각형의 넓이 : ${rectangle.getArea()}`)

// ㅇ 정사각형 클래스 
class Square {
  constructor (length) {
    this.length = length 
  }
  // 정사각형 둘레 구하기 
  getPerimeter () {
    return 4 * this.length
  }
  // 정사각형 넓이 구하기
  getArea () {
    return this.length * this.length
  }
}
// 클래스 사용 
const square = new Square(10)
console.log(`정사각형 둘레 : ${square.getPerimeter()}`)
console.log(`정사각형 넓이 : ${square.getArea()}`)


