google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['courses', 'No of trainers'],
    ['Java',     6],
    ['Html',      3],
    ['css-bootstrap',  3],
    ['javascript', 4],
    ['angular',    3],
    ['Jdbc', 2],
    ['servlets',2],
    ['springs',2],
    ['sql',2],
    ['hibernate',3]
  ]);

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  function selectHandler() {
var selectedItem = chart.getSelection()[0];
if (selectedItem) {
  console.log(selectedItem)
  if(selectedItem.row===0){
window.location.href="./java.html"
  }else if(selectedItem.row===1){
      window.location.href="./html.html"
  }else if(selectedItem.row===2){
      window.location.href="./cssboot.html"
  }else if(selectedItem.row===3){
      window.location.href="./javascrpt.html"
  }else if(selectedItem.row===4){
      window.location.href="./angular.html"
  }else if(selectedItem.row===5){
      window.location.href="./jdbc.html"
  }else if(selectedItem.row===6){
      window.location.href="./servlets.html"
  }else if(selectedItem.row===7){
      window.location.href="./springs.html"
  }else if(selectedItem.row===8){
      window.location.href="./sql.html"
  }else if(selectedItem.row===9){
      window.location.href="./hibernate.html"
  }
}
}

  var options = {
    title: 'Trainer Details',
    is3D:false
  };

 

// Listen for the 'select' event, and call my function selectHandler() when
// the user selects something on the chart.
google.visualization.events.addListener(chart, 'select', selectHandler);



  chart.draw(data, options);
}