type ActionBarProps = {
	children: React.ReactNode,
	className?: string,
};

const ActionBar = ({children, className} : ActionBarProps) => {
	return (
		<section className={className}>
			{children}
		</section>
	);
};

export default ActionBar;
