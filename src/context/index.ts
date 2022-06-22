import { createContext, useContext } from "react";

interface Article {
    headline: string;
    source: string;
    datetime: string | Date;
    image: string;
    url: string;
    summary: string;
}

export interface Stock {
    changePercent: number;
    latestPrice: number;
    symbol: string;
    companyName: string;
    change: number;
}

export type StockState = {
    symbol: string;
    companyName: string;
    updateTicker: (symbol: string, companyName: string) => void;
    articles: Array<Article>;
    fetchNews: () => void;
    popularStocks: Array<Stock>;
    fetchPopularStocks: () => void;
}

export enum ActionType {
    GetTicker = 'GET_TICKER',
    UpateTicker = 'UPDATE_TICKER',
    GetNews = 'GET_NEWS',
    GetPopularStocks = 'GET_POPULAR_STOCKS',
}

export interface Action {
    type: ActionType;
    payload: any;
}

export const initialValues = {
    symbol: "SPY",
    companyName: "S&P 500 ETF TRUST ETF",
    updateTicker: (symbol: string, companyName: string) => {},
    articles: [],
    fetchNews: () => {},
    popularStocks: [],
    fetchPopularStocks: () => {},
};

export const StockContext = createContext<StockState>(initialValues);

export const useStockContext = () => useContext(StockContext);