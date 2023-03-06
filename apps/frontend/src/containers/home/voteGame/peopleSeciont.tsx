import { FC } from 'react';
import { Member } from 'types';

interface PeopleSectionProps {
	people: Member[];
	flipped: boolean;
}

const PeopleSection: FC<PeopleSectionProps> = ({
	people,
	flipped,
}: PeopleSectionProps) => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			{people.map((person) => (
				<div className="flex-row min-w-max">
					<div>
						<span className="relative inline-block mx-3 text-center">
							<div className="h-20 w-16  rounded-md bg-blue-300 flex justify-center items-center">
								{person.rate && flipped ? person.rate : ''}
							</div>
							<span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
						</span>
					</div>
					<div className="flex-col text-center">
						<label className="text-sm">{person.name}</label>
					</div>
				</div>
			))}
		</div>
	);
};

export default PeopleSection;
