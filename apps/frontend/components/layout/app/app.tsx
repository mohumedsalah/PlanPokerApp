import type { ReactElement } from 'react';

import Sidebar from 'components/sidebar';

const appLayout = (page: ReactElement) => {
	return (
		<>
			<Sidebar />
			<main className="pb-12 lg:ml-[220px]">{page}</main>
		</>
	);
};

export default appLayout;
