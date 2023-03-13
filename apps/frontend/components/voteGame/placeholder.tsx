interface PlaceholderProps {}

const Placeholder: React.FunctionComponent<PlaceholderProps> = () => {
	return (
		<section className="section">
			<h1 className="text-3xl font-semibold text-center mb-5">
				You can see this page because you are signed in
			</h1>
			<p className="text-center mb-16 text-slate-600">
				To see more, go to pricing page and subscribe to a plan.
			</p>
		</section>
	);
};

export default Placeholder;
