
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "java",
    litres: 100
  },
  {
    country: "mean stack",
    litres:100
  },
  {
    country: "mernstack",
    litres: 100
  },
  {
    country: "datascience",
    litres: 100
  },
  {
    country: "python",
    litres: 100
  },
  {
    country: "dotnet",
    litres: 100
  }
];

chart.innerRadius = am4core.percent(40);
chart.depth = 120;

chart.legend = new am4charts.Legend();

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.depthValue = "litres";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 5;
series.colors.step = 3;