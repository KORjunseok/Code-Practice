// 03chapter.js

const date = new Date(); // 현재 날짜와 시간을 생성하는 객체 생성
const hour = date.getHours(); // 현재 시간을 0~23 사이의 값으로 출력하는 메소드

if (hour < 12) {
  console.log("오전입니다.");
}

if (hour >= 12) {
  console.log("오후입니다.");
}
