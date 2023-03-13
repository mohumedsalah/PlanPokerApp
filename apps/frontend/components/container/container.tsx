interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
	return <section className="max-w-5xl mx-auto">{children}</section>;
};

export default Container;
