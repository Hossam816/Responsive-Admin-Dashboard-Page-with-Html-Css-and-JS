const chart = document.querySelector("#chart").getContext("2d");
// Creating chart

new Chart(chart, {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "BTC",
                data: [ 29374, 39357, 65487, 94785, 36478, 45687, 31489, 23041, 97870, 256978 ],
                borderColor: "red",
                borderWidth: 2,
            },
            {
                label: "ETH",
                data: [ 98454, 312450, 15204, 139671, 12912, 21217, 69774, 36489, 69712, 54632 ],
                borderColor: "blue",
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
    },
});
