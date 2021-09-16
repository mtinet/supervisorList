d3.csv("https://docs.google.com/spreadsheets/d/1fAAR5aikt6QRBQ1VUCNzxkQrDn2wsl_wDKo637I_tFQ/export?format=csv", function(data) {

  var order = 1
  var data = data[order-1]
  var orderAndName = data.number + '기 ' + data.name
  var presentData = data.subject + ', ' + data.position + ', ' + data.cellphone + ', ' + data.email + ', ' + data.address

  //전체 읽어오기
  // var presentData = data.order + ', ' + data.number + '기, ' + data.name + ', ' + data.subject + ', ' + data.position + ', ' + data.cellphone + ', ' + data.email + ', ' + data.address


  document.getElementById("orderAndName").innerHTML=orderAndName;
  document.getElementById("presentData").innerHTML=presentData;
});
