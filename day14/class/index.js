// class Student {
//   // 변수: 속성/명사/상태: 대학교, 전공, 학년, 학점, 과제들, 학번, 입학년도, 수강과목리스트
//   constructor(a, b) {
//     this.name = a;
//     this.university = "연세대학교";
//     this.major = b;
//   }
//   intro() {
//     console.log(
//       `저는 '${this.name}'이고, '${this.university}'이고, '${this.major}'입니다.`
//     );
//   }

//   // 함수: 동작/동사: 술마시기, 졸업작품만들기, 논문쓰기
//   drinking(x) {
//     console.log(`${x}를 마십니다.`);
//   }
//   makeMaseterPiece() {
//     console.log("졸작만들기");
//   }
// }

// const kim = new Student("김민재", "컴퓨터공학과");
// const lee = new Student("이지민", "정치외교학과");

// kim.intro();
// kim.drinking("테라");
// lee.intro();
// lee.drinking("카스");

// class Dog {
//   // 수술이력, 나이, 성별, 품종, 밥먹는 상태
//   // 수술날짜등록하기, 보험이력등록하기, 가입하기, ...
// }

// class Dog {
//   //hp, stress수치, 스피드, 스킬들,
//   // 놀아주기, 옷입히기, 하트주기
// }

class HardButton {
  constructor(backgroundColor, content) {
    this.backgroundColor = backgroundColor;
    this.content = content;
  }
  render() {
    const newDiv = document.createElement("div");
    newDiv.style.width = "190px";
    newDiv.style.height = "60px";
    newDiv.style.padding = "10px 16px";
    newDiv.style.backgroundColor = this.backgroundColor;
    newDiv.innerText = this.content;

    const test = document.querySelector(".test");
    test.appendChild(newDiv);
  }
}

const a = new HardButton("#3498db", "레스토랑");
const b = new HardButton("#34495e", "메가커피");
const c = new HardButton("#e67e22", "귀찮음");

a.render();
b.render();
c.render();
