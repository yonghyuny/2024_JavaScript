// Javascript에서는 function도 참조타입이다

// 기본 타입변환: String() / "", Number() / 123, Boolean() / !!,
// 참조 타입변환: Array() / [], Function() / ()=>{}, Object()/{}

// 1. [일반 함수]: function name(x, y){return ?}
// 2. [화살표함수]: const name = (x)  => {return ?}
// 3. [익명함수]:
// [1. 일회성]
// [2. 이벤트성]
//  - 1 function () {}
//  - 2 () => {}

const arr = Array(1000)
  .fill(1)
  .map((v, i) => i);

const airplane = {
  name: "보잉704",
  company: "에어서울",
  passenger: 200,
  airport: {
    start: "인천공항",
    end: "나리타공항",
  },
};
