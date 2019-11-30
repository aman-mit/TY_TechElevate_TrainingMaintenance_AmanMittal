google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Years',  'Java', 'Oracle', 'DataScience', 'Angular', 'Phython','Average'],
    ['2014/15',  20,       18,          22,          5,          50,      20  ],
    ['2015/16',  40,       20,          39,          8,          68,      38  ],
    ['2016/17',  60,       47,          47,          17,         77,      52  ],
    ['2017/18',  80,       60,          55,          38,         85,      69  ],
    ['2018/19',  90,       81,          69,          50,         96,      89  ],
  ]);

  var options = {
    title : 'Yearly Trainnings Batches',
    vAxis: {title: 'Trainings',titleTextStyle: {color: 'Black'} },
    hAxis: {title: 'Years By Analysis',titleTextStyle: {color: 'Black'}},
    colors:['darkcyan','dodgerblue','indianred','slategray','DarkGoldenRod'],
    is3D : true,
    seriesType: 'bars', 
    series: {5: {type: 'line'},
    
  }        };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}