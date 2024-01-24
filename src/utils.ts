export function excerptify(text:string = '', maxLength:number = 120) : string {
	const excerpt = text.replace(/(<([^>]+)>)/ig, '');
    if (excerpt.length > maxLength) {
        return excerpt.substring(0, maxLength) + '\u2026';
    }
	// If the text is within the limit, return it as is.
	return excerpt;
}

export const range = (start, end, step = 1) => {
	let output = [];
	if (typeof end === 'undefined') {
	  end = start;
	  start = 0;
	}
	for (let i = start; i < end; i += step) {
	  output.push(i);
	}
	return output;
};
