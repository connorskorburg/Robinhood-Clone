/// <reference types="react-scripts" />

declare namespace DashboardTypes {
    interface ArticleItem {
        headline: string;
        source: string;
        datetime: string | Date;
        image: string;
        url: string;
        summary: string;
    }

    type OptionType = "5dm" | "1m" | "3m" | '6m' | 'ytd' | "1y" | "max";

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
    
    interface Series {
        change: number;
        changePercent: number;
        close: number;
        date: string;
        high: number;
        low: number;
        open: number;
    }
    
    interface Stock {
        changePercent: number;
        latestPrice: number;
        symbol: string;
        companyName: string;
        change: number;
        close: number;
        open: number;
    }

    type StockState = {
        symbol: string;
        companyDescription: string;
        changePercent: number;
        change: number;
        latestPrice: number;
        companyName: string;
        updateTicker: (symbol: string, companyName: string) => void;
        articles: Array<DashboardTypes.Article>;
        fetchNews: () => void;
        popularStocks: Array<DashboardTypes.Stock>;
        fetchPopularStocks: () => void;
        fetchCompanyInfo: () => void;
        fetchWatchlist: (watchlist: Array<string>) => void;
        watchlist: Array<string>;
        watchlistData: Array<DashboardTypes.WatchlistItem>;
        fetchSeriesData: (symbol: string, range: DashboardTypes.OptionType) => void;
        seriesData: Array<DashboardTypes.Series>;
        fetchStockPrice: (symbol: string) => void;
        updateWatchlist: (watchlist: Array<string>) => void;
    }
    
    enum ActionType {
        GetTicker = 'GET_TICKER',
        UpateTicker = 'UPDATE_TICKER',
        GetNews = 'GET_NEWS',
        GetPopularStocks = 'GET_POPULAR_STOCKS',
        GetCompanyInfo = 'GET_COMPANY_INFO',
        GetWatchlist = 'GET_WATCH_LIST',
        GetSeriesData = 'GET_SERIES_DATA',
        GetStockPrice = 'GET_STOCK_PRICE',
        UpdateWatchlist = 'UPDATE_WATCHLIST'
    }
    
    interface Action {
        type: ActionType;
        payload: any;
    }


}