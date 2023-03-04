import { Logger } from '@nestjs/common';
import {
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/poker' })
export class PokerGateway implements OnGatewayInit {
	@WebSocketServer()
	wss: Server;

	private logger: Logger = new Logger('ChatGateway');

	afterInit(server: any) {
		this.logger.log('Initialized!');
	}

	@SubscribeMessage('joinRoom')
	handleRoomJoin(client: Socket, room: string) {
		console.log('xxxxx');
		client.join(room);
		client.emit('joinedRoom', room);
	}

	@SubscribeMessage('revertCards')
	handleMessage(client: Socket, message: { sender: string; room: string }) {
		console.log('eeeeeeeeeee');

		console.log(JSON.stringify(message, null, 2));
		this.wss.to(message.room).emit('revertedCards', message);
	}

	@SubscribeMessage('vote')
	vote(
		client: Socket,
		message: { sender: string; room: string; rate: string }
	) {
		console.log('wwwwwwwwwwwwwwww');

		this.wss.to(message.room).emit('voted', message);
	}
}
