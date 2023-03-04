import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux-store';
import { Loading } from 'shared';
import Routing from 'routes';
import io from 'socket.io-client';
import './index.css';

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Provider store={store}>
				<PersistGate loading={''} persistor={persistor}>
					<Routing />
				</PersistGate>
			</Provider>
		</Suspense>
	);
}

export default App;
