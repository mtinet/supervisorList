const dataUrl = "https://raw.githubusercontent.com/mtinet/supervisorList/main/supervisorList.csv";
const submitButton = document.querySelector("input[type=submit]");

function authenticateUser(event) {
  event.preventDefault(); // 폼 기본 동작 취소

  const number = document.getElementById("number").value;
  const name = document.getElementById("name").value;

  // 검색어가 없으면 검색하지 않고 종료
  if (number === "" || name === "") {
    displayMessage("기수와 이름에 알맞은 내용을 입력하세요.");
    return;
  }

  fetch(dataUrl)
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split("\n").slice(1);
      const teachers = rows.map(row => row.split(","));
      const matchingTeacher = teachers.find(teacher => teacher[1] === number && teacher[2] === name);
      if (matchingTeacher) {
        window.location.href = "indexInner.html";
      } else {
        displayMessage("입력하신 정보가 맞지 않습니다.");
      }
    })
    .catch(error => console.log(error));
}

const numberInput = document.getElementById("number");

numberInput.addEventListener('focus', () => {
  numberInput.placeholder = "";
  numberInput.style.opacity = 1.0;
});

numberInput.addEventListener('blur', () => {
  if (numberInput.value === '') {
    numberInput.placeholder = "ex) 24, 24-2, 31";
    numberInput.style.opacity = 0.3;
  }
});


function displayMessage(message) {
  const messageContainer = document.getElementById("result");
  messageContainer.innerHTML = message;

  // 3초 후 메시지 초기화
  setTimeout(() => {
    messageContainer.innerHTML = "";
  }, 3000);
}

submitButton.addEventListener("click", authenticateUser);
