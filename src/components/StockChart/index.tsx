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
  } = useStockContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchSeriesData(symbol);
    setLoading(false);
    // eslint-disable-next-line
  }, [symbol]);

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

  const isStockGreen = !changePercent?.toString()?.includes("-");

  return (
    <section>
      <header>
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
      </header>
      {loading || !formattedSeriesData.length ? (
        <div className="chart-loading" />
      ) : (
        <Chart
          options={ChartOptions()}
          series={[{ data: formattedSeriesData }]}
          type="line"
          width={"100%"}
          height={300}
        />
      )}
      <StockChartOptions />
    </section>
  );
};

export default StockChart;
