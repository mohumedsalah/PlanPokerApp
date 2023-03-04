import { socketEvent, socketListener } from '@core/lib';
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

	@SubscribeMessage(socketEvent.JOIN_ROOM)
	handleRoomJoin(client: Socket, room: string) {
		console.log('xxxxx');
		client.join(room);
		client.emit(socketListener.JOINED_ROOM, room);
	}

	@SubscribeMessage(socketEvent.REVERT_CARDS)
	handleMessage(client: Socket, message: { sender: string; room: string }) {
		console.log('eeeeeeeeeee');

		console.log(JSON.stringify(message, null, 2));
		this.wss.to(message.room).emit(socketListener.REVERTED_CARDS, message);
	}

	@SubscribeMessage(socketEvent.VOTE)
	vote(
		client: Socket,
		message: { sender: string; room: string; rate: string }
	) {
		console.log('wwwwwwwwwwwwwwww');

		this.wss.to(message.room).emit(socketListener.VOTED, message);
	}
}
