am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("java", am4charts.PieChart);

chart.colors.list = [
  am4core.color("red"),
  am4core.color("blue"),
  am4core.color("green"),
  am4core.color("#FF9671"),
  am4core.color("#FFC75F"),
  am4core.color("#F9F871")
];


var label = chart.createChild(am4core.Label);
label.text = "Batches(Java Full Stack)";
label.fontSize = 35;
label.align = "center";



// Add data
chart.data = [ {
  "country": "Completed",
  "litres": 7
}, {
  "country": "On Going",
  "litres": 4
}, {
  "country": "Yet To Start",
  "litres": 2
} ];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

