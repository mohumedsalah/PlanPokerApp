import { FC } from 'react';

const RevertButton: FC = () => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			<button
				type="button"
				className="rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
			>
				Revert Cards
			</button>
		</div>
	);
};

export default RevertButton;
