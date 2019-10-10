import $ from 'jquery';
 
$(document).ready(function(){

    var myChartObject = document.getElementById('myChart');

    var chart = new Chart(myChartObject,{
        
        type: 'line',
        data: {
            labels: ['January','February','March','April','May','June','July'],
    
            datasets: [{
                label: 'dataset number 1',
                backgroundColor: 'rgba(65,105,225,0.4)',
                borderColor: 'rgba(65,105,225,0.4)',
                data: [3,7,5,2,7,8,6,4 /* mydata */]
    
            },{
                label: 'dataset number 2',
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.4)',
                borderColor: 'rgba(255,0,0,0.4)',
                data: [5,6,2,5,6,5,5,4 /* mydata */]
            }]
    
    
        }
    });

});











