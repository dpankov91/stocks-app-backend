import { Module } from '@nestjs/common';
import {StocksGateway} from "./gateaways/stocks.gateway";

@Module({
    providers: [StocksGateway],
})
export class StocksModule {}
