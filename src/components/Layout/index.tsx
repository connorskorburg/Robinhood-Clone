import Search from "../Search";
import StockChart from "../StockChart";
import Watchlist from "../Watchlist";
import About from "../About";
import PopularStocks from "../PopularStocks";
import News from "../News";

const Layout = (): JSX.Element => {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <Search />
        <StockChart />
        <About />
        <PopularStocks />
        <News />
      </div>
      <Watchlist />
    </div>
  );
};

export default Layout;
