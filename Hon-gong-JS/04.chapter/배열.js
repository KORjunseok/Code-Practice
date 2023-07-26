// push 배우기
const todos = ["우유 구매", "업무 매일 확인하기", "필라테스 수업"];
todos.push("저녁 식사 준비하기");
todos.push("명상하기");
console.log(todos);

const fruitsB = ["사과", "배", "바나나"];
fruitsB[fruitsB.length] = "귤";
console.log(fruitsB);

// 배열.splice(인덱스, 제거할 요소의 개수)
const itemsA = ['사과', '배', '바나나']
itemsA.splice(2,1)
console.log(itemsA);

// const 인덱스 = 배열.indexOf(요소)
// 배열.splice(인덱스,1)
const itemsB = ['사과', '배', '바나나']
const index = itemsB.indexOf('바나나')

itemsB.splice(index, 1)
itemsB
console.log(itemsB);

itemsB.indexOf('바나나')

// 문자열의 indexOf() 메소드
const stringA = "동해물과 백두산이 마르고 닳도록"
console.log(stringA.indexOf("백두산"))

// 배열 내부에서 특정 값을 가진 요소 모두 제거하기
const itemsE = ['사과', '배', '바나나', '귤', '귤']
itemsE.filter((item) => item !== '귤')
console.log(itemsE)

// 배열의 특정 위치에 요소 추가하기 
// 배열.splice(인덱스,0,요소)
const itemsD = ['사과', '귤', '바나나', '오렌지']
itemsD.splice(1, 0, "양파")
console.log(itemsD)

// 자료의 비파괴와 파괴 
// 비파괴적 처리 : 처리 후에 원본 내용이 변경되지 않는다. 
// 파괴적 처리 : 처리 후에 원본 내용이 변경된다.

// 비파괴적 처리의 예
const a = '안녕'
const b = '하세요'
const c = a + b 
console.log(c)

// 파괴적 처리의 예 
const array = ['사과', '배', '바나나']
array.push('귤')
console.log(array)










