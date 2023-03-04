import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';

import { socketEvent, socketListener } from '@core/lib';

const room = 'HelloFromOtherSide';

const VoteGame: FC = () => {
	const socket = io('http://localhost:4000/poker');
	const joinRoom = () => {
		socket.emit(socketEvent.JOIN_ROOM, room);
	};

	const voteMessage = () => {
		socket.emit(socketEvent.VOTE, { room, sender: 'mo', rate: 3 });
	};

	const revertCards = () => {
		socket.emit(socketEvent.REVERT_CARDS, { room, sender: 'mo' });
	};

	useEffect(() => {
		socket.on(socketListener.REVERTED_CARDS, (data) => {
			console.log('cards need to revert with data', data);
		});
		socket.on(socketListener.VOTED, (data) => {
			console.log('new vote for coming', data);
		});

		socket.on(socketListener.JOINED_ROOM, (data) => {
			console.log('new one join for coming', data);
		});
	}, [socket]);
	return (
		<div>
			<button
				className="mt-3 block bg-indigo-600 text-xl font-bold  text-white p-2"
				onClick={joinRoom}
			>
				Join room
			</button>

			<button
				className="mt-3 block bg-indigo-600 text-xl font-bold  text-white p-2"
				onClick={voteMessage}
			>
				vote
			</button>

			<button
				className="mt-3 block bg-indigo-600 text-xl font-bold  text-white p-2"
				onClick={revertCards}
			>
				revert cards
			</button>
		</div>
	);
};

export default observer(VoteGame);
