import { useReducer } from "react";
import { StockContext, initialValues, ActionType } from "..";
import Reducer from "../Reducer";

const Provider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(Reducer, initialValues);

  const { symbol, companyName, articles, popularStocks } = state;

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

  return (
    <StockContext.Provider
      value={{
        symbol,
        companyName,
        updateTicker,
        articles,
        fetchNews,
        popularStocks,
        fetchPopularStocks,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default Provider;
