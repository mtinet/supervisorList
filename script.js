const dataUrl = "https://raw.githubusercontent.com/mtinet/supervisorList/main/supervisorList.csv";
const resultsContainer = document.getElementById("results");


function searchName(name, number) {
  if (name === "" && number === "") {
    displayResults("기수와 이름 중 하나를 입력하고 검색해주세요.");
    return; // 검색어가 없으면 검색하지 않고 종료
  }
  if (name !== "" && number !== "") {
    displayResults("기수와 이름 중 하나만 검색해주세요.");
    return;
  }
  fetch(dataUrl)
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split("\n").slice(1);
      const teachers = rows.map(row => row.split(","));
      let matchingTeachers;
      if (number) {
        matchingTeachers = teachers.filter(teacher => teacher[1] === number);
      } else {
        matchingTeachers = teachers.filter(teacher => teacher[2].includes(name));
      }
      if (matchingTeachers.length > 0) {
        displayResults(matchingTeachers);
      } else {
        displayResults("검색 결과가 없습니다.");
      }
    })
    .catch(error => console.log(error));
}


function displayResults(teachers) {
  if (typeof teachers === "string") {
    resultsContainer.innerHTML = teachers;
  } else {
    const html = teachers.map(teacher => `
      <div class="teacher">
        <center>
          <img src="https://raw.githubusercontent.com/mtinet/supervisorList/main/photos/${teacher[0] < 365 ? 0 : teacher[0]}.jpg" width="250px" alt="${teacher[2]}">
        </center>
        <div class="teacher-info">
          <h2>${teacher[2]}</h2>
          <p><strong>Batch No.:</strong> ${teacher[1]}기</p>
          <p><strong>Subject:</strong> ${teacher[3]}</p>
          <p><strong>Position:</strong> ${teacher[4]}</p>
          <p><strong>Phone:</strong> <a href="tel:${teacher[5]}">${teacher[5]}</a></p>
          <p><strong>Email:</strong> ${teacher[6]}</p>
          <p><strong>Address:</strong> ${teacher[7]}</p>
        </div>
      </div>
    `).join("");
    resultsContainer.innerHTML = html;
  }
}


const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = form.elements.name.value;
  const number = form.elements.number.value;
  searchName(name, number);
});


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
