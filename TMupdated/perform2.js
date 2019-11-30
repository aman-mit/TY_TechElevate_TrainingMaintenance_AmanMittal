

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv1", am4charts.XYChart);

var data = [];

chart.data = [{
  "year": "Java",
  "attendance": 60,
  "expenses": 21.1,
  "lineColor": chart.colors.next()
}, {
  "year": "HTML",
  "attendance": 80,
  "expenses": 30.5
}, {
  "year": "CSS",
  "attendance": 60,
  "expenses": 34.9
}, {
  "year": "JS",
  "attendance": 70,
  "expenses": 23.1
}, {
  "year": "Hibernate",
  "attendance": 60,
  "expenses": 28.2,
  "lineColor": chart.colors.next()
}, {
  "year": "JDBC",
  "attendance": 60,
  "expenses": 31.9
}, {
  "year": "Spring",
  "attendance": 70,
  "expenses": 31.9
}, {
  "year": "Angular",
  "attendance": 60,
  "expenses": 31.9,
  "lineColor": chart.colors.next()
}];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "year";
categoryAxis.startLocation = 0.4;
categoryAxis.endLocation = 0.6;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.title.text = "Percentage";
valueAxis.title.fontWeight = "bold";

var label = chart.createChild(am4core.Label);
label.text = "Student's Performance";
label.fontSize = 20;
label.align = "center";


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;



var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "year";
lineSeries.dataFields.valueY = "attendance";
lineSeries.tooltipText = "Performance: {valueY.value}";
lineSeries.fillOpacity = 0.5;
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.stroke = "lineColor";
lineSeries.propertyFields.fill = "lineColor";

var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 6;
bullet.circle.fill = am4core.color("#fff");
bullet.circle.strokeWidth = 3;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;

