import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const PopularStocks = (): JSX.Element => {
  const { fetchPopularStocks, popularStocks } = useStockContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchPopularStocks();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const loadingArray = new Array(4).fill(null);

  return (
    <div id="popular-stocks">
      <h2>Popular Stocks</h2>
      <h4 className="my-1 text-light">
        Stocks that are the most popular today.
      </h4>
      {loading || !popularStocks.length ? (
        <div className="flex-between mb-75">
          {loadingArray.map((item, idx) => (
            <div key={idx} className="loading-card" />
          ))}
        </div>
      ) : (
        <div className="flex-between mb-75">
          {popularStocks.map(
            (
              {
                latestPrice,
                changePercent,
                companyName,
                open,
                close,
              }: DashboardTypes.Stock,
              idx
            ) => {
              const isStockGreen = close > open;
              return (
                idx < 4 && (
                  <div key={idx} className="card">
                    <h4 className="font-bold h-60">{companyName}</h4>
                    <h2 className={`text-${isStockGreen ? "green" : "red"}`}>
                      ${latestPrice.toFixed(2)}
                    </h2>
                    <p
                      className={`text-${isStockGreen ? "green" : "red"} mt-1`}
                    >
                      {isStockGreen
                        ? `+${changePercent}%`
                        : `-${changePercent}%`}
                    </p>
                  </div>
                )
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default PopularStocks;
