export const ChartOptions = () => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00C805",
          downward: "#FF5000",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    tooltip: {
      //   custom: ({ series, seriesIndex, dataPointIndex, w }) => {
      // setTickerInfo({
      //   ...tickerInfo,
      //   iexClose: series[seriesIndex][dataPointIndex],
      // });

      // return `<p>${new Date(
      //   w.globals.categoryLabels[dataPointIndex]
      // ).toLocaleString("en-us")}</p>`;
      //   },
      x: {
        show: false,
      },
    },
    markers: {
      colors: ["#00C805"],
    },
    stroke: {
      show: true,
      colors: ["#00C805"],
      width: 2,
    },
    annotations: {
      yaxis: [
        {
          // y: seriesData[0]["y"][0],
          strokeDashArray: 2,
          opacity: 0.8,
          offsetX: 0,
          offsetY: 0,
        },
      ],
    },
    noData: {
      text: "No data found",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#000000",
        fontSize: "14px",
        fontFamily: "Helvetica",
      },
    },
  };
};