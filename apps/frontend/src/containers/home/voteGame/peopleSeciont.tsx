import { FC } from 'react';

const people = [
	{
		name: 'Omar',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	{
		name: 'Omar',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
	},
	// More people...
];

const PeopleSection: FC = () => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			{people.map((person) => (
				<div className="flex-row min-w-max">
					<div>
						<span className="relative inline-block mx-3 text-center">
							<div className="h-20 w-16  rounded-md bg-blue-300" />
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
