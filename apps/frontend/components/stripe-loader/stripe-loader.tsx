import { FaStripe } from 'react-icons/fa';
import useTranslation from 'next-translate/useTranslation';

interface StripeLoaderProps {}

const StripeLoader: React.FunctionComponent<StripeLoaderProps> = () => {
	const { t } = useTranslation('common');
	return (
		<div className="flex flex-col items-center">
			<FaStripe className="text-8xl text-slate-400" />
			<span className="text-sm text-slate-600 -mt-4">
				{t('stripe-redirect')}
			</span>
		</div>
	);
};

export default StripeLoader;
