import { Offer } from "@/types";
import { excerptify } from "@/utils";
import Link from "next/link";
import { Briefcase, MapPin } from "react-feather";

const JobCard = ({job} : {job: Offer}) => {
	const {id, name, contents, company, categories, levels} = job;
	// Build component.
	return (
		<Link prefetch={true} href={`/offer/${id}`} className="card flex grow justify-start items-stretch">
			<article className="card__body p-4 shadow-sm shadow-gray-400 dark:shadow-gray-800 bg-white-50 dark:bg-gray-800 rounded-lg flex flex-col justify-start items-start gap-4 relative outline-none focus-visible:ring ring-blue-500">
				<h2 className="text-xl font-semibold text-gray-950 dark:text-white-50">{name}</h2>
				<p className="text-base text-gray-800 dark:text-white-200">{excerptify(contents)}</p>
				<ol className="mt-auto flex justify-start items-center flex-wrap gap-4 text-gray-950 dark:text-white-50">
					<li className="flex justify-start items-center gap-2 text-sm">
						<Briefcase height={16} width={16}/>
						<p>{company.name}</p>
					</li>
					<li className="flex justify-start items-center gap-2 text-sm">
						<MapPin height={16} width={16}/>
						<p>Fully remote</p>
					</li>
					{categories.map((category) => (
						<li key={`${id}-${category.name}`} className="rounded-3xl px-4 py-1 bg-white-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-950 text-sm">
							{category.name}
						</li>
					))}
					{levels.map((level) => (<li key={`${id}-${level.name}`} className="rounded-3xl px-4 py-1 bg-white-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-950 text-sm text-s">{level.name}</li>))}
				</ol>
			</article>
		</Link>
	);
};

export default JobCard;
