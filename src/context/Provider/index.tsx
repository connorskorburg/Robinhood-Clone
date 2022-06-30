import { useReducer } from "react";
import { StockContext, initialValues, ActionType } from "..";
import Reducer from "../Reducer";

const Provider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(Reducer, initialValues);

  const {
    symbol,
    companyName,
    articles,
    popularStocks,
    companyDescription,
    watchlist,
    watchlistData,
    seriesData,
    changePercent,
    change,
    latestPrice,
  } = state;

  const updateTicker = (symbol: string, companyName: string) => {
    dispatch({
      type: "UPDATE_TICKER" as ActionType,
      payload: { symbol, companyName },
    });
  };

  const fetchNews = () =>
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}stock/market/news?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}&range=1m&includeToday=true&format=json`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_NEWS" as ActionType, payload: data })
      )
      .catch((error) => new Error(error));

  const fetchPopularStocks = () =>
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}stock/market/list/mostactive?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}&range=1m&includeToday=true&format=json`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_POPULAR_STOCKS" as ActionType, payload: data })
      )
      .catch((error) => new Error(error));

  const fetchCompanyInfo = () =>
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}stock/${symbol}/company?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_COMPANY_INFO" as ActionType,
          payload: data?.description,
        });
      })
      .catch((error) => new Error(error));

  const fetchWatchlist = (watchlist: Array<string>) =>
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}stock/market/quote?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}&range=1m&includeToday=true&displayPercent=true&symbols=${watchlist}}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_WATCH_LIST" as ActionType,
          payload: data,
        });
      })
      .catch((err) => console.error(err));

  const fetchSeriesData = (symbol: string, range: DashboardTypes.OptionType) =>
    fetch(
      `${
        process.env.REACT_APP_IEX_CLOUD_API_BASE_URL
      }stock/${symbol}/chart?token=${
        process.env.REACT_APP_IEX_CLOUD_API_KEY
      }&range=${range.toLowerCase()}&includeToday=true&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_SERIES_DATA" as ActionType,
          payload: data,
        });
      })
      .catch((err) => console.error(err));

  const fetchStockPrice = (symbol: string) =>
    fetch(
      `${process.env.REACT_APP_IEX_CLOUD_API_BASE_URL}stock/${symbol}/quote?token=${process.env.REACT_APP_IEX_CLOUD_API_KEY}&range=1m&includeToday=true&displayPercent=true&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_STOCK_PRICE" as ActionType,
          payload: data,
        });
      })
      .catch((err) => console.error(err));

  return (
    <StockContext.Provider
      value={{
        symbol,
        companyName,
        companyDescription,
        updateTicker,
        articles,
        fetchNews,
        popularStocks,
        fetchPopularStocks,
        fetchCompanyInfo,
        fetchWatchlist,
        watchlist,
        watchlistData,
        fetchSeriesData,
        seriesData,
        changePercent,
        change,
        latestPrice,
        fetchStockPrice,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default Provider;
