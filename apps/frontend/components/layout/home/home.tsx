import type { ReactElement } from 'react';

import Header from 'components/header';

const homeLayout = (page: ReactElement) => {
	return (
		<>
			<Header />
			{page}
		</>
	);
};

export default homeLayout;
