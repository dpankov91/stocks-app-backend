import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Socket} from "socket.io";
import {Inject} from "@nestjs/common";
import {IStockService, IStockServiceProvider} from "../../core/primary-ports/stock.service.interface";

@WebSocketGateway()
export class StockGateway {
    constructor(
        @Inject(IStockServiceProvider) private stockService: IStockService,
    ) {}

    @WebSocketServer() server;

    @SubscribeMessage('allStocks')
    async handleStockEvent(
        @ConnectedSocket() client: Socket,
    ): Promise<void> {
        try {
            const stocks = await this.stockService.getAllStocks();
            this.server.emit('allStocks', stocks);
        } catch (e) {
            client.error(e.message);
        }
    }
}
