import useTranslation from 'next-translate/useTranslation';
import { TbRocket, TbEditCircle, TbStack2 } from 'react-icons/tb';

const benefits = [
	{
		icon: <TbStack2 />,
		circleTop: 5,
		circleLeft: 6,
		circleWidth: 16,
		circleHeight: 16,
	},
	{
		icon: <TbEditCircle />,
		circleTop: 8,
		circleLeft: 3,
		circleWidth: 18,
		circleHeight: 18,
	},
	{
		icon: <TbRocket />,
		circleTop: 6,
		circleLeft: 14,
		circleWidth: 10,
		circleHeight: 10,
	},
];
const Benefits: React.FunctionComponent = () => {
	const { t } = useTranslation('home');

	return (
		<section className="section -mt-6">
			<ul className="flex flex-col md:flex-row justify-center items-center">
				{benefits.map((benefit, index) => (
					<li
						key={`benefit-${index}`}
						className="relative mx-10 mb-6 md:mb-0 mt-6"
					>
						<div className="absolute -left-[44px] top-[2px] text-3xl">
							<div
								style={{
									top: benefit.circleTop,
									left: benefit.circleLeft,
									width: benefit.circleWidth,
									height: benefit.circleHeight,
								}}
								className="absolute rounded-full -z-10 bg-gradient-to-r from-violet-500 to-fuchsia-500"
							/>
							{benefit.icon}
						</div>
						<h3 className="font-semibold tracking-tight mb-4 text-xl">
							{t(`benefit-${index + 1}.title`)}
						</h3>
						<p className="text-base max-w-xs text-slate-500">
							{t(`benefit-${index + 1}.description`)}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Benefits;
