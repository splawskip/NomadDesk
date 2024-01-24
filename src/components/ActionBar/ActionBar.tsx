type ActionBarProps = {
	children: React.ReactNode,
	className?: string,
};

const ActionBar = ({children, className} : ActionBarProps) => {
	// Build component.
	return (
		<section className={className}>
			{children}
		</section>
	);
};

export default ActionBar;
