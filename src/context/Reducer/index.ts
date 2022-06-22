import { StockState, Action } from "..";

const Reducer = (state: StockState, action: Action) => {
    switch(action.type) {
        case 'UPDATE_TICKER':
            return {
                ...state,
                symbol: action.payload.symbol,
                companyName: action.payload.companyName,
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
        default:
            return state;
    }
}

export default Reducer;