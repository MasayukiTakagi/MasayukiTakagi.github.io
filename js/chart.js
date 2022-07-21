console.log('chart.jsを読み込みました');


const labels = [
    '1回目',
    '2回目',
    '3回目',
    '4回目',
    '5回目',
    '6回目',
    '7回目',
    '8回目',
    '9回目',
    '10回目',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 133)',
        data: [4, 3, 2, 1, 2, 3, 1, 2, 1, 4, ],
    }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
