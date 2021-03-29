import { Injectable } from '@nestjs/common';
import {IStockService} from "../primary-ports/stock.service.interface";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Stock} from "../../infrastructure/entities/stock.entity";
import {StockModel} from "../models/stock.model";

@Injectable()
export class StockService implements IStockService{

    constructor(
        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>,
    ) {}

    async getAllStocks(): Promise<StockModel[]> {
        const stocks = await this.stockRepository.find();
        const stockModels: StockModel[] = JSON.parse(JSON.stringify(stocks));
        return stockModels;
    }
}
