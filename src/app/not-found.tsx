const NotFound = () => {
	return (
		<main className="grid grow place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
		  <div className="text-center">
			<p className="text-2xl font-semibold text-gray-950/80 dark:text-white-50/80">404</p>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white-50 sm:text-5xl">Page not found</h1>
			<p className="mt-6 text-base leading-7 text-gray-950/80 dark:text-white-50/80">Sorry, we couldn’t find the page you’re looking for.</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
			  <a
				href="/"
				className="rounded-md bg-nomadic-sand-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-transparent dark:hover:text-white-50"
			  >
				Go back home
			  </a>
			  <a href="https://github.com/splawskip/NomadDesk/issues" rel="noopener noreferrer" target="_blank" className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white text-gray-950 dark:text-white-50 shadow-sm hover:bg-nomadic-sand-300 hover:text-gray-950 dark:hover:text-gray-950">
				Contact support <span aria-hidden="true">&rarr;</span>
			  </a>
			</div>
		  </div>
		</main>
	)
};

export default NotFound;
