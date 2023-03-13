import { FC } from 'react';
import { Member } from 'types';

interface CardsSectionsProps {
	selectCard: (person: Member, vote: number) => void;
}

const votedValues = [1, 1, 2, 3, 5, 8, 13, 21];

const CardsSections: FC<CardsSectionsProps> = ({
	selectCard,
}: CardsSectionsProps) => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			{votedValues.map((el) => (
				<div
					onClick={() => {
						selectCard({ name: 'xx', rate: el }, el);
					}}
					className="flex-row min-w-max"
				>
					<div>
						<span className="relative inline-block mx-3 text-center">
							<div className="h-20 w-16 hover:cursor-pointer hover:bg-blue-700 hover:text-white rounded-md bg-blue-300 flex justify-center items-center ">
								{el}
							</div>
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardsSections;
