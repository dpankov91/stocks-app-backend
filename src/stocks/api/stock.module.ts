import { Module } from '@nestjs/common';
import {StockGateway} from "./gateaways/stock.gateway";

@Module({
    providers: [StockGateway],
})
export class StockModule {}
