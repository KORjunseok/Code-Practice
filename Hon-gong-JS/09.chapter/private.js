// // ㅇ private 속성 사용하기(1)
// // 사각형 클래스 
// class Square {
//   #length // 이 위치에 해당 속성을 private 속성으로 사용하겠다고 미리 선언
  
//   constructor (length) {
//     if (length <= 0) {
//       throw '길이는 0보다 커야 한다.'
//     }
//     this.#length = length
//   }
//   getPerimeter () { return 4 * this.#length}
//   getArea () { return this.#length * this.#length}

// }
// // 클래스 사용
// const square = new Square (10)
// square.length = -10
// // square.#length = -10
// console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
// console.log(`정사각형의 넓이: ${square.getArea()}`)

// ㅇ 게터(getter)와 세터(setter) 메소드
// 정사각형 클래스
// class Square {
//   #length // 이 위치에 해당 속성을 private 속성으로 사용하겠다고 미리 선언
  
//   constructor (length) {
//     this.setLength(length)
//     }
    
//     setLength (value) {
//       if (value <= 0) {
//         throw '길이는 0보다 커야 한다.'
//       }
//       this.#length = value
//     }
//     getLength (value) {
//       return this.#length
//     }
//   getPerimeter () { return 4 * this.#length}
//   getArea () { return this.#length * this.#length}
// }
// // 클래스 사용
// const square = new Square (10)
// console.log(`한 변의 길이는 ${square.getLength()}입니다.`)
// // 예외 발생시키기
// square.setLength(-10)

// // square.#length = -10
// console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
// console.log(`정사각형의 넓이: ${square.getArea()}`)

// ㅇ get 키워드와 set 키워드 조합
// 정사각형 클래스 
class Square {
  #length // 이 위치에 해당 속성을 private 속성으로 사용하겠다고 미리 선언
  
    constructor (length) { 
    this.setLength(length) // -> this.length 값을 지정하면, set length(length) 메소드 부분이 호출됩니다.
    }
    get length () {
      return this.#length
    }
    get perimeter () {
      return this.#length * 4
    }
    get area () {
      return this.#length * this.#length
    }
    set length (length) {
      if (length <= 0) {
        throw '길이는 0보다 커야 한다.'
      }
      this.#length = length
    }
  }
  // 클래스 사용
  const squareA = new Square(10)
  // 속성을 사용하는 형태로 사용하면, 자동으로 게터와 세터가 호출 됨
  console.log(`한 변의 길이: ${squareA.length}`)
  console.log(`둘레: ${squareA.perimeter}`)
  console.log(`넓이: ${squareA.area}`)
  // 예외 발생
  const squareB = new Square(-10)