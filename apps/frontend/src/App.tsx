import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux-store';
import { Loading } from 'shared';
import Routing from 'routes';
import io from 'socket.io-client';
import './index.css';

const room = 'HelloFromOtherSide';

function App() {
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
		<Suspense fallback={<Loading />}>
			<Provider store={store}>
				<PersistGate loading={''} persistor={persistor}>
					<Routing />
				</PersistGate>
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
			</Provider>
		</Suspense>
	);
}

export default App;
