

// 3의 배수일 경우에는 '박수' 다른 배수일 경우 '통과'

// function 삼육구게임(num){
//   if (num % 3 == 0) {
//     console.log("박수");
//   } else {
//     console.log('통과');
//   }
// }

// 삼육구게임(16);

function 삼육구게임(num){
  if (num % 9 == 0) {
    console.log("박수2");
  } else if (num % 3 == 0) {
    console.log('박수');
  } else {
    console.log('통과')
  }
}

삼육구게임(28);

