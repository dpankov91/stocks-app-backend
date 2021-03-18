import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stocks/api/stock.module';
import { StockService } from './stocks/core/services/stock.service';

@Module({
  imports: [StockModule],
  controllers: [AppController],
  providers: [AppService, StockService],
})
export class AppModule {}
