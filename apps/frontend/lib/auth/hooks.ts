import { useSession } from 'next-auth/react';

export const useSubscription = () => {
	const { data } = useSession();

	if (!data)
		return {
			hasSubscription: false,
		};

	return {
		hasSubscription: !!data.subscriptionItems.length,
	};
};
