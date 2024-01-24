export type Offer = {
	contents: string,
	name: string,
	type: string,
	publication_date: string,
	short_name: string,
	id: number,
	locations: Location[],
	categories: Category[],
	levels: Level[],
	tags: string[],
	refs: any,
	company: Company,
};

type Location = {
	name: string,
};

type Category = {
	name: string,
};

type Level = {
	name: string,
	short_name: string,
};

type Company = {
	id: number,
	short_name: string,
	name: string,
};

export type SearchParams = {
	[key: string]: string;
};
