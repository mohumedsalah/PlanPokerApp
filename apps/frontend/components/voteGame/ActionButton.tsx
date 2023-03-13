import { FC } from 'react';

interface ActionButtonProps {
	flipped: boolean;
	revertCard: () => void;
	startNewVote: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({
	flipped,
	revertCard,
	startNewVote,
}: ActionButtonProps) => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			{flipped ? (
				<button
					onClick={startNewVote}
					type="button"
					className="rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
				>
					Start New Session
				</button>
			) : (
				<button
					type="button"
					onClick={revertCard}
					className="rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
				>
					Revert Cards
				</button>
			)}
		</div>
	);
};

export default ActionButton;
