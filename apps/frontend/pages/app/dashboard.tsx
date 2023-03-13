import Head from 'components/head';
import appLayout from 'components/layout/app';
import VoteGame from 'components/voteGame';
import requireSignIn from 'lib/auth/require-sign-in';
import { NextPageWithLayout } from 'pages/_app';
import { api } from 'utils/api';

const Dashboard: NextPageWithLayout = () => {
	const hello = api.example.hello.useQuery({ text: 'from tRPC' });
	const qu = api.example.getAll.useQuery();
	return (
		<>
			<Head title="Dashboard" />
			{hello.data?.greeting}
			{JSON.stringify(qu.data, null, 2)}
			<VoteGame />
		</>
	);
};

Dashboard.getLayout = appLayout;

export const getServerSideProps = requireSignIn;

export default Dashboard;
