import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';

import { socketEvent, socketListener } from '@core/lib';
import PeopleSection from 'containers/home/voteGame/peopleSeciont';
import RevertButton from 'containers/home/voteGame/RevertButton';
import ResultSection from 'containers/home/voteGame/Result';
import CardsSections from 'containers/home/voteGame/CardsSection';

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
		<div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
			<div className="px-4 py-5 sm:px-6">
				<PeopleSection />
			</div>
			<div className="px-4 py-5 sm:p-6">
				<RevertButton />
			</div>
			<div className="px-4 py-4 sm:px-6">
				<CardsSections />
			</div>
		</div>
	);
};

export default observer(VoteGame);
