import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stocks/api/stock.module';
import { StockService } from './stocks/core/services/stock.service';
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./stocks/infrastructure/data-source/database.module";
import * as Joi from "@hapi/joi";

@Module({
  imports: [
      StockModule,
      ConfigModule.forRoot({
        validationSchema: Joi.object({
          POSTGRES_HOST: Joi.string().required(),
          POSTGRES_PORT: Joi.number().required(),
          POSTGRES_USER: Joi.string().required(),
          POSTGRES_PASSWORD: Joi.string().required(),
          POSTGRES_DB: Joi.string().required(),
          PORT: Joi.number(),
        }),
      }),
      DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, StockService],
})
export class AppModule {}
