
const Reducer = (state: DashboardTypes.StockState, action: DashboardTypes.Action) => {
    switch(action.type) {
        case 'UPDATE_TICKER':
            return {
                ...state,
                symbol: action.payload.symbol,
                companyName: action.payload.companyName,
            }
        case 'UPDATE_WATCHLIST':
            return {
                ...state,
                watchlist: action.payload,
            }
        case 'GET_NEWS':
            return {
                ...state,
                articles: action.payload
            }
        case 'GET_POPULAR_STOCKS':
            return {
                ...state,
                popularStocks: action.payload
            }
        case 'GET_COMPANY_INFO':
            return {
                ...state,
                companyDescription: action.payload
            }
        case 'GET_WATCH_LIST':
            return {
                ...state,
                watchlistData: action.payload
            }
        case 'GET_SERIES_DATA': 
            return {
                ...state,
                seriesData: action.payload
            }
        case 'GET_STOCK_PRICE': {
            return {
                ...state,
                changePercent: action.payload.changePercent,
                change: action.payload.change,
                latestPrice: action.payload.latestPrice,
            }
        }
        default:
            return state;
    }
}

export default Reducer;