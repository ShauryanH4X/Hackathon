document.addEventListener("DOMContentLoaded", function() {
    var ctx = (document.getElementById('emission-trends')).getContext('2d');
    var emissionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Emissions (tons CO2)',
                data: [1200, 1100, 1000, 900, 850],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});