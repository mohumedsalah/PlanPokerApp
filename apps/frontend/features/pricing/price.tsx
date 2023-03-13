import { Price } from '@prisma/client';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

interface PriceProps {
	prices: Price[];
	interval: Interval;
}

const gerCurrencySign = (currency: string) => {
	switch (currency.toLowerCase()) {
		case 'usd':
		case 'cad':
		case 'aud':
			return '$';
		case 'eur':
			'€';
		default:
			return '';
	}
};

const getAmount = (amount: number) => Math.round(amount / 100);

const Price: React.FunctionComponent<PriceProps> = ({ prices, interval }) => {
	const price = prices.find((price) => price.interval === interval);

	const { t } = useTranslation('pricing');

	if (!price) return null;

	return (
		<>
			<span
				className="font-extralight text-5xl text-gradient mb-8"
				style={{ WebkitTextFillColor: 'transparent' }}
			>
				{gerCurrencySign(price.currency)}
				{getAmount(price.amount)}
			</span>
			<Link href={`/stripe/checkout/${price.id}`} passHref>
				<a className="btn-outline">{t('get-started')}</a>
			</Link>
		</>
	);
};

export default Price;
