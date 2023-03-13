import { useMutation } from '@tanstack/react-query';

import { getStripe } from 'lib/stripe';
import api from 'lib/api';

export const useCreatePortal = () => {
	return useMutation(
		['useCreatePortal'],
		async () => {
			const res = await api.post('stripe/portal');
			const { data } = await res.json<{ data: string }>();
			return data;
		},
		{
			retry: false,
			onSuccess: (url) => {
				window.location.assign(url);
			},
		}
	);
};

export const useCreateCheckout = () => {
	return useMutation(
		['useCreateCheckout'],
		async ({ price }: { price: string }) => {
			const res = await api.post('stripe/checkout', { json: { price } });
			const { data } = await res.json<{ data: string }>();
			return data;
		},
		{
			onSuccess: async (sessionId) => {
				const stripe = await getStripe();
				stripe?.redirectToCheckout({ sessionId });
			},
			retry: false,
		}
	);
};
