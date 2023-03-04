import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import io from 'socket.io-client';
const room = 'HelloFromOtherSide';

const VoteGame: FC = () => {
	const socket = io('http://localhost:4000/poker');
	const joinRoom = () => {
		socket.emit('joinRoom', room);
	};

	const voteMessage = () => {
		socket.emit('vote', { room, sender: 'mo', rate: 3 });
	};

	const revertCards = () => {
		socket.emit('revertCards', { room, sender: 'mo' });
	};

	useEffect(() => {
		socket.on('revertedCards', (data) => {
			console.log('cards need to revert with data', data);
		});
		socket.on('voted', (data) => {
			console.log('new vote for coming', data);
		});

		socket.on('joinedRoom', (data) => {
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
