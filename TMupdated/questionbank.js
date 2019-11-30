// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
var chart = am4core.create("questionbank", am4charts.PieChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "Core Java",
    value: 525
  },
  {
    country: "J2EE",
    value: 392
  },
  {
    country: "Hibernate",
    value: 300
  },
  {
    country: "Springs",
    value: 325
  }
];

var label = chart.createChild(am4core.Label);
//label.text = "Question Bank";
label.fontSize = 35;
label.align = "center";

chart.colors.list = [
    am4core.color("green"),
    am4core.color("blue"),
    am4core.color("green"),
    am4core.color("#FF9671"),
    am4core.color("#FFC75F"),
    am4core.color("#F9F871")
  ];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.radiusValue = "value";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 6;
series.colors.step = 3;

series.hiddenState.properties.endAngle = -90;

