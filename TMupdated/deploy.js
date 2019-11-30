am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart3D);

// Add data
chart.data = [{
  "year": 2018,
  "income": 50,
  "color": chart.colors.next()
}, {
  "year": 2019,
  "income": 65,
  "color": chart.colors.next()
}, {
  "year": 2020,
  "income": 70,
  "color": chart.colors.next()
}, {
  "year": 2021,
  "income": 78,
  "color": chart.colors.next()
}, {
  "year": 2022,
  "income": 85,
  "color": chart.colors.next()
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.title.text = "Year";
categoryAxis.title.fontWeight="bold"

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
valueAxis.title.text = "Number Of Students Deployed";
// valueAxis.title.fontWeight="bold";
valueAxis.title.fontSize="30";


// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueX = "income";
series.dataFields.categoryY = "year";
series.name = "Income";
series.columns.template.propertyFields.fill = "color";
series.columns.template.tooltipText = "{valueX}";
series.columns.template.column3D.stroke = am4core.color("#fff");
series.columns.template.column3D.strokeOpacity = 0.2;