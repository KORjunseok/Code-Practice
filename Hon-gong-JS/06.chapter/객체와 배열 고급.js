// ㅇ 속성 존재 여부 확인하기 
// 객체 생성 
const object = {
  name : '혼자 공부하는 파이썬',
  price : 18000,
  publisher : '한빛미디어'
}
// 객체 내부에 속서 있는지 확인
if (object.name !== undefined) {
  console.log('name 속성이 있습니다.')
} else {
  console.log('name 속성이 없습니다.')
}
if (object.author !== undefined) {
  console.log('author 속성이 있습니다.')
} else {
  console.log('author 속성이 없습니다.')
}

// 객체 내부 속성 확인 (간단)
if (object.name) {
  console.log('name 속성이 있습니다.')
} else {
  console.log('name 속성이 없습니다.')
}
if (object.author) {
  console.log('author 속성이 있습니다.')
} else {
  console.log('author 속성이 없습니다.')
}

// 객체 내부 속성 확인 (더 간단)
object.name || console.log('name 속성이 없습니다.3')
object.author || console.log('author 속성이 없습니다.3')

// ㅇ 기본 속성 지정하기 
// 객체 기본 속성 지정 
object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? object.author : '저자 미상'
// 객체 출력 
console.log(JSON.stringify(object, null, 2))

// 배열 기반의 다중 할당 
// let arrayA = [1,2,3,4,5]
// const [a,b,c] = arrayA
// console.log(a,b,c)

// 객체 속성 꺼내서 다중 할당하기 
// 객체 변수 추출
const {name, price} = object
console.log('# 속성 이름 그대로 꺼내서 출력')
console.log(name, price)
console.log('')

const {a=name, b=price} = object
console.log(' # 다른 이름으로 속성 꺼내서 출력')
console.log(a, b)

// 얕은 복사 이해하기
// // 사야 하는 물건 목록
// const 물건_200301 = ['우유', '식빵']
// const 물건_200302 = 물건_200301
// 물건_200302.push('고구마')
// 물건_200302.push('토마토')
// // 출력
// console.log(물건_200301)
// console.log(물건_200302)

// ㅇ 전개 연산자를 사용해 배열 복사 
// 사야 하는 물건 목록
const 물건_200301 = ['우유', '식빵']
const 물건_200302 = [...물건_200301]
물건_200302.push('고구마')
물건_200302.push('토마토')
// 출력
console.log(물건_200301)
console.log(물건_200302)

// ㅇ 얕은 복사로 객체 복사
const 구름 = {
  이름 : '구름',
  나이 : 6,
  종족 : '강아지'
}
const 별 = 구름
별.이름 = '별'
별.나이 = 1
console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))





