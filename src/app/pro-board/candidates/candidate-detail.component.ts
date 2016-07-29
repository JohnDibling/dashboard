import { Component, Input } from '@angular/core';
import { Candidate } from './candidate.model'

@Component({
	selector: 'candidate-detail',
	templateUrl: './candidate-detail.template.html'
})
export class CandidateDetailComponent {
	@Input()
		candidate: Candidate;

}
