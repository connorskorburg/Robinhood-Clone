import { createContext, useContext } from "react";

interface Article {
    headline: string;
    source: string;
    datetime: string | Date;
    image: string;
    url: string;
    summary: string;
}

interface WatchlistItem {
    symbol: string;
    companyName: string;
    changePercent: number;
    latestPrice: number;
    previousClose: number;
}

export interface Stock {
    changePercent: number;
    latestPrice: number;
    symbol: string;
    companyName: string;
    change: number;
    close: number;
    open: number;
}

export type StockState = {
    symbol: string;
    companyDescription: string;
    companyName: string;
    updateTicker: (symbol: string, companyName: string) => void;
    articles: Array<Article>;
    fetchNews: () => void;
    popularStocks: Array<Stock>;
    fetchPopularStocks: () => void;
    fetchCompanyInfo: () => void;
    fetchWatchlist: (watchlist: Array<string>) => void;
    watchlist: Array<string>;
    watchlistData: Array<WatchlistItem>;
}

export enum ActionType {
    GetTicker = 'GET_TICKER',
    UpateTicker = 'UPDATE_TICKER',
    GetNews = 'GET_NEWS',
    GetPopularStocks = 'GET_POPULAR_STOCKS',
    GetCompanyInfo = 'GET_COMPANY_INFO',
    GetWatchlist = 'GET_WATCH_LIST',
}

export interface Action {
    type: ActionType;
    payload: any;
}

export const initialValues = {
    symbol: "AAPL",
    companyDescription: "Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.",
    companyName: "Apple Inc.",
    updateTicker: (symbol: string, companyName: string) => {},
    articles: [],
    fetchNews: () => {},
    popularStocks: [],
    fetchPopularStocks: () => {},
    fetchCompanyInfo: () => {},
    fetchWatchlist: (watchlist: Array<string>) => {},
    watchlist: ['AAPL'],
    watchlistData: [{
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        changePercent: 0,
        latestPrice: 0,
        previousClose: 0
    }]
};

export const StockContext = createContext<StockState>(initialValues);

export const useStockContext = () => useContext(StockContext);