// case 1. 삼육구게임 
// function 삼육구게임(num){
//   if (num % 3 == 0) {
//     console.log("박수");
//   } else {
//     console.log('통과');
//   }
// }
// 삼육구게임(16);

// case 2. 삼육구게임 업글
// function 삼육구게임(num){
//   if (num % 9 == 0) {
//     console.log("박수2");
//   } else if (num % 3 == 0) {
//     console.log('박수');
//   } else {
//     console.log('통과')
//   }
// }
// 삼육구게임(28);

// case 3. 공인중개사 시험점수 
// function 합격했냐(개론, 민법) {
//   if (개론+민법 >= 120 && 개론 >40 && 민법 >40) {
//     console.log("합격입니다.")
//   } else {
//     console.log("불합격입니다.")
//   }
// };
// 합격했냐(50, 50)

// case 4. 문제 맞추기 
// 한글부터 짜면 됩니다.
// 제출버튼 누를 때 
// 유저가 입력한 답안이 '1335'면 alert('성공')
// 유저가 제출버튼 누른 횟수가 3회 이상이고 답안도 못맞추면 alert('멍청아')
// 출력하라고 하면 됩니다.
// 제출버튼 누른 횟수도 var 변수로 어딘가 기록하면 되겠군요

// <p>태조 이성계가 태어난 년도는?</p>
// <input type="text" id="answer">
// <button id="send-answer">제출</button>

// <script>

//   var count = 0;

//   document.querySelector('#send-answer').addEventListener('click', function(){
//     count += 1;
//     var 유저답안 = document.querySelector('#answer').value;
//     if (유저답안 == '1335') {
//       alert('성공')
//     } else if (count >= 3 && 유저답안 != '1335'){
//       alert('멍청아')
//     }
//   });
// </script>

