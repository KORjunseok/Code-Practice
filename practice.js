// inch 단위를 cm 단위로 변경하기 
const rawInput = prompt('inch 단위의 숫자를 입력하세요.')
const inch = Number(rawInput);
const cm = inch * 2.54 ;

alert(`${inch}inch는 ${cm}cm입니다.`)