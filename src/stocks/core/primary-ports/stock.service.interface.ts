import {StockModel} from "../models/stock.model";

export const IStockServiceProvider = 'IStockServiceProvider';
export interface IStockService {

    getAllStocks(): Promise<StockModel[]>;

}
