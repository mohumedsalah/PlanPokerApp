import { FC, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

import { socketEvent, socketListener } from '@core/lib';
import PeopleSection from './peopleSeciont';
import RevertButton from './ActionButton';
import ResultSection from './Result';
import CardsSections from './CardsSection';

export interface Member {
	name: string;
	rate?: number;
}

const room = 'HelloFromOtherSide';

const VoteGame: FC = () => {
	const socket = io('http://localhost:4000/poker');

	const [flipped, setFlipped] = useState(false);

	const joinRoom = () => {
		socket.emit(socketEvent.JOIN_ROOM, room);
	};

	const voteMessage = () => {
		socket.emit(socketEvent.VOTE, { room, sender: 'mo', rate: 3 });
	};

	const revertCards = () => {
		socket.emit(socketEvent.REVERT_CARDS, { room, sender: 'mo' });
	};

	const memberVote = (person: Member, vote: number) => {
		console.log('xxx');
	};
	useEffect(() => {
		joinRoom();
	}, []);

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
				<PeopleSection
					people={[
						{ name: 'Omar', rate: 25 },
						{ name: 'Salah', rate: 20 },
					]}
					flipped={flipped}
				/>
			</div>
			<div className="px-4 py-5 sm:p-6">
				<RevertButton
					flipped={flipped}
					revertCard={() => {
						setFlipped(true);
					}}
					startNewVote={() => setFlipped(false)}
				/>
			</div>
			<div className="px-4 py-4 sm:px-6">
				{flipped ? (
					<ResultSection />
				) : (
					<CardsSections selectCard={memberVote} />
				)}
			</div>
		</div>
	);
};

export default VoteGame;
