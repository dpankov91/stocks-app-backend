import { Module } from '@nestjs/common';
import {StockGateway} from "./gateaways/stock.gateway";
import {StockService} from "../core/services/stock.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Stock} from "../infrastructure/entities/stock.entity";
import {IStockServiceProvider} from "../core/primary-ports/stock.service.interface";

@Module({
    imports: [TypeOrmModule.forFeature([Stock])],
    providers: [StockGateway,
        {
            provide: IStockServiceProvider,
            useClass: StockService,
        }],
})
export class StockModule {}
