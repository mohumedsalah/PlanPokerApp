import { FC } from 'react';

const CardsSections: FC = () => {
	return (
		<div className="bg-white flex overflow-auto justify-center">
			<div className="flex-row min-w-max">
				<div>
					<span className="relative inline-block mx-3 text-center">
						<div className="h-20 w-16  rounded-md bg-blue-300 flex justify-center items-center ">
							1
						</div>
						<span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default CardsSections;
