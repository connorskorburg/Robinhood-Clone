export const ChartOptions = (seriesData: Array<any>, isStockGreen: boolean) => {
  const openPrice = seriesData[0].open;
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
        custom: ({ series, seriesIndex, dataPointIndex, w }: { series: any, seriesIndex: any, dataPointIndex: any, w: any }) => {
      return `<p>${new Date(
        w.globals.categoryLabels[dataPointIndex]
      ).toLocaleString("en-us")}</p>`;
        },
      x: {
        show: false,
      },
    },
    markers: {
      colors: [`#${isStockGreen ? "00C805" : "FF5000"}`],
    },
    stroke: {
      show: true,
      colors: [`#${isStockGreen ? "00C805" : "FF5000"}`],
      width: 2,
    },
    annotations: {
      yaxis: [
        {
          y: openPrice,
          strokeDashArray: 2,
          opacity: 0.8,
          offsetX: 0,
          offsetY: 0,
        },
      ],
    },
  };
};