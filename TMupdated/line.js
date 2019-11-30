var chart = new Highcharts.Chart({
  chart: {
    renderTo: 'container1',
    marginBottom: 80
  },
  title:{
    text:'No of Students Deployed'
  },
  xAxis: {
    categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    labels: {
      rotation: 90
    },
    title:{
      text:'Years'
    }
  },
  yAxis:{
    title:{
        text:'Number Of Students'
    }
},

  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
  }]
});