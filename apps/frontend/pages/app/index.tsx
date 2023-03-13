import appLayout from 'components/layout/app';
import requireSignIn from 'lib/auth/require-sign-in';
import { NextPageWithLayout } from 'pages/_app';

const App: NextPageWithLayout = () => {
	return null;
};

App.getLayout = appLayout;

export const getServerSideProps = requireSignIn;

export default App;
