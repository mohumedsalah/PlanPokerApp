import { Price, Product } from '@prisma/client';
import useTranslation from 'next-translate/useTranslation';
import ProductPrice from './price';

type ProductWithPrice = Product & {
	prices: Price[];
};

interface PricingProps {
	products: ProductWithPrice[];
}

const Pricing: React.FunctionComponent<PricingProps> = ({ products }) => {
	const { t } = useTranslation('pricing');

	return (
		<section className="section">
			<h1 className="text-3xl font-semibold text-center mb-5">
				{t('title')}
			</h1>
			<p className="text-center mb-16 text-slate-600">
				{t('description')}
			</p>
			<ul className="flex flex-col lg:flex-row items-center justify-center">
				{products.map((product) => (
					<li
						key={product.id}
						className="flex flex-col items-center border-4 border-slate-200 rounded-xl py-5 px-12 pb-8 mb-7 lg:mx-4"
					>
						<strong className="text-2xl font-semibold mb-5">
							{product.name}
						</strong>
						<ProductPrice
							prices={product.prices}
							interval={'month'}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Pricing;
