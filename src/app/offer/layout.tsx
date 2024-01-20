import React from "react";

const OfferLayout = ({children} : {children: React.ReactNode}) => {
	// Build component.
	return (
		<article className="p-6 flex grow flex-col justify-start items-start gap-4 bg-white-100 dark:bg-gray-900">
			{children}
		</article>
	);
};

export default OfferLayout;
