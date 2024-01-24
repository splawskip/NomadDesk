export function excerptify(text: string = '', maxLength: number = 120): string {
	const excerpt = text.replace(/(<([^>]+)>)/ig, '');
	if (excerpt.length > maxLength) {
	  return excerpt.substring(0, maxLength) + '\u2026';
	}
	// If the text is within the limit, return it as is.
	return excerpt;
};

export function range(start: number, end?: number, step: number = 1): number[] {
	let output: number[] = [];
	if (typeof end === 'undefined') {
	  end = start;
	  start = 0;
	}
	for (let i = start; i < end; i += step) {
	  output.push(i);
	}
	return output;
};

