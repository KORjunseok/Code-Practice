// ㅇ 메소드에서 순서대로 메소드 호출하기
// // 클래스 선언
// class LifeCycle {
//   call () {
//     this.a()
//     this.b()
//     this.c()
//   }
//   a () {console.log(`a() 메소드를 호출합니다.`)}
//   b () {console.log(`b() 메소드를 호출합니다.`)}
//   c () {console.log(`c() 메소드를 호출합니다.`)}
// }
// // 인스턴스 생성
// new LifeCycle().call()

// ㅇ 오버라이드 
// // 클래스 선언 
// class LifeCycle {
//   call () {
//     this.a()
//     this.b()
//     this.c()
//   }
//   a () {console.log(`a() 메소드를 호출합니다.`)}
//   b () {console.log(`b() 메소드를 호출합니다.`)}
//   c () {console.log(`c() 메소드를 호출합니다.`)}
// }

// class Child extends LifeCycle {
//   // 오버라이드 
//   a() {
//     console.log ('자식의 a() 메소드입니다.')
//   }
// }
// // 인스턴스 생성
// new Child().call()

// ㅇ 부모에 있던 내용 가져오기 
// 클래스 선언 
class LifeCycle {
  call () {
    this.a()
    this.b()
    this.c()
  }
  a () {console.log(`a() 메소드를 호출합니다.`)}
  b () {console.log(`b() 메소드를 호출합니다.`)}
  c () {console.log(`c() 메소드를 호출합니다.`)}
}
class Child extends LifeCycle {
  // 오버라이드 
  a() { 
    super.a()
    console.log ('자식의 a() 메소드입니다.')
  }
}
// 인스턴스 생성
new Child().call()