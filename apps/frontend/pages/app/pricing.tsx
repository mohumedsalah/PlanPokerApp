import type { GetServerSidePropsContext } from 'next';
import { Price, Product } from '@prisma/client';

import Pricingcomponent from 'features/pricing';
import Head from 'components/head';
import type { NextPageWithLayout } from 'pages/_app';
import appLayout from 'components/layout/app';
import checkSignIn from 'lib/auth/check-sign-in';
import prisma from 'lib/prisma';

type ProductWithPrice = Product & {
	prices: Price[];
};

type PricingProps = NextPageWithLayout & {
	products: ProductWithPrice[];
};

const Pricing = ({ products }: PricingProps) => {
	return (
		<>
			<Head title="Pricing" />
			<Pricingcomponent products={products} />
		</>
	);
};

Pricing.getLayout = appLayout;

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const {
		props: { session },
	} = await checkSignIn(context);

	if (!session) {
		return {
			redirect: {
				destination: '/',
			},
		};
	}

	const products = await prisma.product.findMany({
		include: { prices: true },
	});

	return {
		props: {
			products,
		},
	};
};

export default Pricing;
