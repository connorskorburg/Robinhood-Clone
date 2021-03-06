import { createContext, useContext } from "react";

export const initialValues = {
    symbol: "AAPL",
    changePercent: 0,
    latestPrice: 0,
    change: 0,
    companyDescription: "Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.",
    companyName: "Apple Inc.",
    updateTicker: (symbol: string, companyName: string) => {},
    articles: [],
    fetchNews: () => {},
    popularStocks: [],
    fetchPopularStocks: () => {},
    fetchCompanyInfo: () => {},
    fetchWatchlist: (watchlist: Array<string>) => {},
    watchlist: ['AAPL', 'TSLA', 'MSFT', 'AMZN', 'DIS', 'NVDA', 'AMD'],
    watchlistData: [{
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        changePercent: 0,
        latestPrice: 0,
        previousClose: 0
    }],
    fetchSeriesData: (symbol: string, range: DashboardTypes.OptionType) => {},
    seriesData: [],
    fetchStockPrice: (symbol: string) => {},
    updateWatchlist: (watchlist: Array<string>) => {}
};

export const StockContext = createContext<DashboardTypes.StockState>(initialValues);

export const useStockContext = () => useContext(StockContext);