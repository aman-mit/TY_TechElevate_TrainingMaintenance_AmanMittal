


am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart3D);

// Add data
chart.data = [{
  "country": "Batch 1",
  "visits": 50
}, {
  "country": "Batch 2",
  "visits": 45
}, {
  "country": "Batch3",
  "visits": 40
}, {
  "country": "Batch 4",
  "visits": 25
}, {
  "country": "Batch 5",
  "visits": 25
}, {
  "country": "Batch 6",
  "visits": 30
}
 , {
  "country": "Batch 7",
   "visits": 40
}, {
 "country": "Batch 8",
  "visits": 45
}, {
  "country": "Batch 9",
   "visits": 45
 }, {
 "country": "Batch 10",
  "visits": 45
}, {
  "country": "Batch 11",
   "visits": 50
 }

];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
// categoryAxis.renderer.labels.template.rotation = 90;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
 categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";
categoryAxis.renderer.cellEndLocation = 0.8;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "No. of Students";
valueAxis.title.fontWeight = "bold";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.name = "Visits";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 8;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineY.strokeOpacity = 0;