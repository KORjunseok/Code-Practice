  // 고차 함수 예시: 함수를 인자로 받는 함수
  function operate(func, a, b) {
    return func(a, b);
  }

  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }

  console.log(operate(add, 2, 3)); // 5
  console.log(operate(multiply, 2, 3)); // 6


  var Ojs = "Hello World";

  // 변수 이름은 OjS
  // 변수 값은 "Hello World" / String 
  // 변수 할당 Ojs = "Hello World";
  // 변수 선언 var Ojs;
  // 변수 참조  변수 Ojs 사용 

  // 문자열 자르기(substr, slice)
  // 문자열 대체(replace)
  // 문자열 분할(split)

  // 함수 표현식을 활용하는 습관을 들이도록 하자!

  let human_say = '최진우'

  switch (human_say) {
    case "오준석":
      console.log("오준석은 인간입니다.");
      break;
    case "조대현":
      console.log("조대현은 인간입니다.");
      break;
    case "최진우":
      console.log("최진우는 인간입니다.");
      break;
    default:
      console.log("그는 신입니다.");
      break;
  }

  let person = { name: "John", age: 30, gender: "male" };

  for (let key in person) {
    console.log(key + ": " + person[key]);
  }

  // break문
  for (let i = 0; i < 20; i++) {
    if (i === 5) {
      console.log("나는 5다~!");
    }
    if (i === 15) {
      console.log("나는 15다~!");
    }
    console.log(i);
  }

  // 아래의 예제에서는 객체 병합을 합니다. 객체 병합을 할 때는 전개 연산자(...)를 사용합니다.
  let person1 = {
    name: "홍길동",
    age: 30
  };

  let person2 = {
    gender: "남자"
  };

  let mergedPerson = { ...person1, ...person2 };

  console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }


  // push() 메소드를 사용하여 배열 fruits의 끝에 "오렌지"를 추가합니다. push() 메소드는 배열의 끝에 요소를 추가합니다.
  let fruits1 = ["사과", "바나나"];

  fruits1.push("오렌지");

  console.log(fruits1);   // ["사과", "바나나", "오렌지"]

  // pop() 메소드를 사용하여 배열 fruits의 마지막 요소를 삭제합니다. pop() 메소드는 배열의 마지막 요소를 삭제합니다.
  let fruits2 = ["사과", "바나나", "오렌지"];

  fruits2.pop();

  console.log(fruits2);   // ["사과", "바나나"]

  // 예제에서는 map() 메소드를 사용하여 배열 numbers의 모든 요소를 제곱한 새로운 배열을 만듭니다. map() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과를 새로운 배열로 반환합니다.
  let numbers1 = [1, 2, 3, 4, 5];

let squaredNumbers = numbers1.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);   // [1, 4, 9, 16, 25]

// 예제에서는 filter() 메소드를 사용하여 배열 numbers에서 짝수만 추출한 새로운 배열을 만듭니다. filter() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소만 새로운 배열로 반환합니다.
let numbers2 = [1, 2, 3, 4, 5];

let evenNumbers = numbers2.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);   // [2, 4]

// sort() 메소드를 사용하여 배열 numbers를 오름차순으로 정렬합니다. sort() 메소드는 배열의 요소를 정렬합니다.
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


sdsd