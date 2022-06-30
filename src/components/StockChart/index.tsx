import Chart from "react-apexcharts";
import StockChartOptions from "./StockChartOptions";
import { ChartOptions } from "./ChartOptions";
import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const StockChart = (): JSX.Element => {
  const {
    symbol,
    companyName,
    seriesData,
    fetchSeriesData,
    fetchStockPrice,
    change,
    changePercent,
    latestPrice,
    watchlist,
    updateWatchlist,
  } = useStockContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [option, setOption] = useState<DashboardTypes.OptionType>("1y");
  let isStockGreen = true;

  useEffect(() => {
    setLoading(true);
    fetchSeriesData(symbol, option);
    setLoading(false);
    // eslint-disable-next-line
  }, [symbol, option]);

  useEffect(() => {
    fetchStockPrice(symbol);
    // eslint-disable-next-line
  }, [symbol]);

  const formattedSeriesData = seriesData?.map(
    ({ date, open, high, low, close }) => {
      return {
        x: new Date(date),
        y: [open, high, low, close],
      };
    }
  );

  if (seriesData.length) {
    isStockGreen = latestPrice > seriesData[0]["open"];
  }

  const isInWatchlist = watchlist.includes(symbol);

  return (
    <section className="mt-50">
      <header className="flex-between-start">
        <div>
          <h1>{companyName}</h1>
          <h1>${latestPrice.toFixed(2)}</h1>
          {isStockGreen ? (
            <h4 className="mt-1">
              +{change} (+{changePercent.toFixed(2)}%)
            </h4>
          ) : (
            <h4 className="mt-1">
              {change.toFixed(2)} ({changePercent.toFixed(2)}%)
            </h4>
          )}
        </div>
        {isInWatchlist ? (
          <button
            onClick={() => {
              const newWatchlist = watchlist.filter((item) => item !== symbol);
              updateWatchlist(newWatchlist);
            }}
            className="btn-red"
          >
            Remove from watchlist
          </button>
        ) : (
          <button
            onClick={() => {
              updateWatchlist([...watchlist, symbol]);
            }}
            className="btn-green"
          >
            Add to watchlist
          </button>
        )}
      </header>
      {loading || !formattedSeriesData.length ? (
        <div className="chart-loading" />
      ) : (
        <Chart
          options={ChartOptions(seriesData, isStockGreen)}
          series={[{ data: formattedSeriesData }]}
          type="line"
          width={"100%"}
          height={300}
        />
      )}
      <StockChartOptions
        option={option}
        setOption={setOption}
        isStockGreen={isStockGreen}
      />
    </section>
  );
};

export default StockChart;
