
// Line Chart
var ctx = $('#lineChart')[0].getContext('2d');
var options = {
    tooltips : {
        titleFontFamily	: "'Google-sans',sans-serif"
    },
    title: {
        display: true,
        text: 'Current Data',
        position: 'top'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Line A',
            data: [7, 6, 3, 5, 2, 3],
            backgroundColor: ['transparent'],
            borderColor: ['#c2185b'],
            pointBorderColor: '#c2185b',
            borderWidth: 2,
            hoverBorderWidth: 3
        },
        {
            label: 'Line B',
            data: [2, 3, 3, 8, 3, 12],
            backgroundColor: ['transparent'],
            borderColor: ['#0288d1'],
            pointBorderColor: '#0288d1',
            borderWidth: 2,
            hoverBorderWidth: 3
        }]
    },
    options: options
});


// Line Chart
var ctx = $('#pieChart')[0].getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#0288d1',
                '#689f38',
                '#8e24aa',
                '#f57c00',
                '#3949ab',
                '#d32f2f'
            ],
            hoverBorderWidth: 4,
            borderWidth: 2
        }]
    },
    options: options
});

// Dough Chart
var ctx = $('#doughChart')[0].getContext('2d');
var doughChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#0288d1',
                '#689f38',
                '#8e24aa',
                '#f57c00',
                '#3949ab',
                '#d32f2f'
            ],
            hoverBorderWidth: 4,
            borderWidth: 2
        }]
    },
    options: options
});

// Line Chart
var ctx = $('#radarChart')[0].getContext('2d');
var radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [18, 19, 20, 15, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'],
            borderColor: '#8e24aa',
            borderWidth: 2
        },
        {
            label: '# of Votes',
            data: [18, 17, 20, 18, 18, 17],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: '#f57c00',
            borderWidth: 2
        }]
    },
    options: options
});