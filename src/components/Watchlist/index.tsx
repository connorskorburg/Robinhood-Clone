import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

const Watchlist = () => {
  const { updateTicker, fetchWatchlist, watchlist, watchlistData } =
    useStockContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchWatchlist(watchlist);
    setLoading(false);
    // eslint-disable-next-line
  }, [watchlist]);

  const loadingArray = new Array(7).fill(null);

  return (
    <section className="card-lg">
      <header className="flex bb-1 h-50">
        <h4 className="px-25 font-bold">Watchlist</h4>
      </header>
      {loading || !watchlistData.length
        ? loadingArray.map((item, idx) => (
            <article key={idx} className="loading list-item">
              <div className="flex-between p-5">
                <p className="mr-1">Loading</p>
                <p className="ml-1">Loading</p>
              </div>
              <div className="flex-between">
                <p className="mr-1">Loading</p>
                <p className="ml-1">Loading</p>
              </div>
            </article>
          ))
        : watchlistData.map(
            ({ symbol, companyName, changePercent, latestPrice }) => {
              const isStockGreen = !changePercent?.toString()?.includes("-");
              return (
                <article
                  onClick={() => updateTicker(symbol, companyName)}
                  key={symbol}
                  className="list-item"
                >
                  <div className="flex-between p-5">
                    <h4 className="font-bold">{symbol}</h4>
                    <p>${latestPrice?.toFixed(2)}</p>
                  </div>
                  <div className="flex-between">
                    <p>{companyName}</p>
                    {isStockGreen ? (
                      <p className="text-green">+{changePercent.toFixed(2)}%</p>
                    ) : (
                      <p className="text-red">{changePercent.toFixed(2)}%</p>
                    )}
                  </div>
                </article>
              );
            }
          )}
    </section>
  );
};

export default Watchlist;
