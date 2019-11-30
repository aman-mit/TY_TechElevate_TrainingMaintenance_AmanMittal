
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart3D);
var label = chart.createChild(am4core.Label);


chart.paddingBottom = 30;
chart.angle = 35;

// Add data
chart.data = [{
  "country": "Java",
  "visits": 90
}, {
  "country": "HTML",
  "visits": 80
}, {
  "country": "CSS",
  "visits": 80
}, {
  "country": "Angular",
  "visits": 70
}, {
  "country": "Hibernate",
  "visits": 70
}, {
  "country": "JDBC",
  "visits": 65
}, {
  "country": "Spring",
  "visits": 90
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.grid.template.disabled = true;




// let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


let labelTemplate = categoryAxis.renderer.labels.template;
labelTemplate.rotation = -90;
labelTemplate.horizontalCenter = "left";
labelTemplate.verticalCenter = "middle";
labelTemplate.dy = 10; // moves it a bit down;
labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

// label.text = "Student's Performance";
// label.fontSize = 30;
// label.align = "center";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.title.text = "Percentage";
valueAxis.title.fontWeight = "bold";

// var label = chart.createChild(am4core.Label);
// label.text = "Attendance";
// label.fontSize = 20;
// label.align = "center";

// Create series
var series = chart.series.push(new am4charts.ConeSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";

var columnTemplate = series.columns.template;
columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})


