const data = [
  // 데이터 배열
];

// 데이터를 표시할 요소 선택
const cardGrid = document.querySelector(".card-grid");

// 데이터를 표시하는 함수 정의
const makeNameCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <div class="avatar">
        <img src="${data.avatarImg}" alt="Avatar">
      </div>
      <div class="info">
        <h5>${data.fullName}</h5>
        <h5>ID: ${data.id}</h5>
        <p>Job: ${data.job}</p>
        <p>Language: ${data.language}</p>
      </div>
    `;

  cardGrid.appendChild(card);
};

// 데이터 배열을 반복하여 각 항목을 표시
data.forEach(makeNameCard);
