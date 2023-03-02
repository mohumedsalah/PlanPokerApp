import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux-store';
import { Loading } from 'shared';
import Routing from 'routes';
import io from 'socket.io-client';

const socket = io('http://localhost:4000/poker');

const joinRoom = async () => {
	console.log('xxxx');
	const ret = socket.emit('message');

	console.log(ret, 'xxxxxyyyyy');
};

function App() {
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
					Hello from the other side
				</button>
			</Provider>
		</Suspense>
	);
}

export default App;
