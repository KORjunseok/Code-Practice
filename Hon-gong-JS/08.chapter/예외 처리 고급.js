// ㅇ 예외 정보 출력하기
// try {
//   const array = new Array(99999999999999999)
// } catch (exception) {
//   console.log(exception)
//   console.log()
//   console.log(`예외 이름: ${exception.name}`)
//   console.log(`예외 이름: ${exception.message}`)
// }

// ㅇ 예외 강제로 발생시키고 잡기 
// function divide(a,b) {
//   if (b ===0) {
//     throw '0으로는 나눌 수 없습니다.'
//   }
//   return a / b 
// }
// console.log(divide(10,2))
// console.log(divide(10,0))

// function test(object) {
//   console.log(object.a + object.b)
// }
// test({})

function test(object) {
  if (object.a !== undefined && object.b !== undefined) {
    console.log(object.a + object.b)
  } else {
    throw new Error("a 속성과 b 속성을 지정하지 않았습니다.")
  }
}
test({})