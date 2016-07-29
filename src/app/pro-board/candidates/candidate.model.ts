import * as _ from 'underscore';

export class Candidate {
	constructor (_data) {
		const data = _data || {};
		_.assign(this, data);
	}
}