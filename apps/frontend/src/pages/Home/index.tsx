import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import NavigationBar from 'containers/home/NavigationBar/navigationBar';

const Page1: FC = () => {
	return (
		<div className="root">
			<NavigationBar />
		</div>
	);
};

export default observer(Page1);
