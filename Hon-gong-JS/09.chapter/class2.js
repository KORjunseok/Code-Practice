// 부모 클래스 및 자식 클래스 
// ㅇ 사각형 클래스와 정사각형 클래스 
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
  // 정사각형 클래스
  class Square extends Rectangle { // Square 클래스가 자식 클래스
    constructor (length) { // -> 부모의 생성자 함수를 호출하는 코드
      super(length, length)
    }
    // -> getPerimeter() 메소드와 getArea() 메소드를 제거 
  }
  // 클래스 사용
  const square = new Square(10, 20)
  console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
  console.log(`정사각형의 둘레: ${square.getArea()}`)

