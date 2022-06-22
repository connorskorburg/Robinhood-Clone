import { useEffect, useState } from "react";
import { useStockContext } from "../../context";

interface TickerItem {
  iexClose: number | null;
  symbol: string;
  companyName: string;
  changePercent: number | null;
}

const Watchlist = () => {
  const { updateTicker } = useStockContext();

  const [list, setList] = useState<Array<TickerItem>>([]);

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/market/quote?token=Tpk_2dedebc58c2b48a189cbbab50515b095&range=1m&includeToday=true&symbols=AAPL,DIS,TSLA,SPY,QQQ&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const tickerData: Array<TickerItem> = [];
        data.forEach(
          ({ iexClose, symbol, companyName, changePercent }: TickerItem) => {
            tickerData.push({
              iexClose,
              symbol,
              companyName,
              changePercent,
            });
          }
        );
        setList(tickerData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="card-lg">
      <header className="flex bb-1 h-50">
        <h4 className="px-25 font-bold">Watchlist</h4>
      </header>
      {list.map(({ iexClose, symbol, companyName, changePercent }) => (
        <article
          onClick={() => updateTicker(symbol, companyName)}
          key={symbol}
          className="list-item"
        >
          <div className="flex-between p-5">
            <h4 className="font-bold">{symbol}</h4>
            <p>${iexClose}</p>
          </div>
          <div className="flex-between">
            <p>{companyName}</p>
            <p className="text-green">+{changePercent}%</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Watchlist;
