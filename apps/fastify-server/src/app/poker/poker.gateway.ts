import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: '/poker' })
export class PokerGateway {
	@SubscribeMessage('message')
	handleMessage(client: any, payload: any): string {
		console.log('comming to back end ..........');
		return 'Hello world!';
	}
}
