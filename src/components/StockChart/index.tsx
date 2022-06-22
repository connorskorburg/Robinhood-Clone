import Chart from "react-apexcharts";
import StockChartOptions from "./StockChartOptions";
import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const StockChart = (): JSX.Element => {
  const { symbol, companyName } = useStockContext();

  console.log(symbol);

  const [tickerInfo, setTickerInfo] = useState({
    symbol,
    iexClose: 0,
    companyName,
    changePercent: 2.3,
  });

  interface SeriesData {
    date: string;
    fHigh: number | null;
    fLow: number | null;
    fClose: number | null;
    fOpen: number | null;
  }
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTickerInfo({ ...tickerInfo, companyName, symbol });
      fetch(
        `https://sandbox.iexapis.com/stable/stock/${tickerInfo.symbol}/chart?token=Tpk_2dedebc58c2b48a189cbbab50515b095&range=1m&includeToday=true&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          const tempSeriesData: any = [];
          data.forEach(({ date, fHigh, fLow, fClose, fOpen }: SeriesData) => {
            if (fHigh && fLow && fClose && fOpen) {
              tempSeriesData.push({
                x: new Date(date),
                y: [fOpen, fHigh, fLow, fClose],
              });
            }
          });
          setSeriesData(tempSeriesData);
          // setTickerInfo({
          //   ...tickerInfo,
          //   iexClose: tempSeriesData[tempSeriesData.length - 1]["y"][3],
          // });
        })
        .catch((err) => console.error(err));
    }, 3000);
  }, [symbol, companyName]);

  return (
    <section>
      <header>
        <h1>{tickerInfo.companyName}</h1>
        <h1>${tickerInfo.iexClose}</h1>
        <h4 className="mt-1">+$0.79 (+0.22%)</h4>
      </header>

      <Chart
        options={{
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
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
              // setTickerInfo({
              //   ...tickerInfo,
              //   iexClose: series[seriesIndex][dataPointIndex],
              // });

              return `<p>${new Date(
                w.globals.categoryLabels[dataPointIndex]
              ).toLocaleString("en-us")}</p>`;
            },
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
            text: "Loading...",
            align: "center",
            verticalAlign: "middle",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: "#000000",
              fontSize: "14px",
              fontFamily: "Helvetica",
            },
          },
        }}
        series={[{ data: seriesData }]}
        type="line"
        width={"100%"}
        height={300}
      />
      <StockChartOptions />
    </section>
  );
};

export default StockChart;
