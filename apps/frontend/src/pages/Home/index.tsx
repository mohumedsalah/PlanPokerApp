import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import NavigationBar from 'containers/home/NavigationBar/navigationBar';
import VoteGame from './views/voteGame';

const Home: FC = () => {
	return (
		<div className="root">
			<NavigationBar />
			{/* <BrowserRouter>
				<Routes>
					<Route path="/" element={} />
				</Routes>
			</BrowserRouter> */}

			<VoteGame />
		</div>
	);
};

export default observer(Home);
