var _order = 660;

//31기 653~702

d3.csv("https://docs.google.com/spreadsheets/d/1fAAR5aikt6QRBQ1VUCNzxkQrDn2wsl_wDKo637I_tFQ/export?format=csv", function(data) {
  var orderAndName = [];
  var presentData = [];

  for (let i = 1; i < data.length; i++) {
    orderAndName[i] = data[i].number + '기 ' + data[i].name;
    presentData[i] = data[i].subject + ', ' + data[i].position + ', ' + data[i].cellphone + ', ' + data[i].email + ', ' + data[i].address;
  }
  // document.getElementById("order").innerHTML=order;
  document.getElementById("orderAndName").innerHTML=orderAndName[_order-1];
  document.getElementById("presentData").innerHTML=presentData[_order-1];
});


var elements = document.getElementsByTagName("section");
console.log(elements[0].innerText);
// document.write("0번째 : " + elements[1].innerText);
document.write(elements[0].innerText)
// <article>
//   <script src = "./photos.js"></script>
//   <h2><div id = "orderAndName"></div></h2>
//   <p><div id = "presentData"></div></p>
// </article>
