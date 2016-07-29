/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { Title } from '@angular/platform-browser'

//HACK
import { Candidate } from './pro-board/candidates/candidate.model';
import { CandidateDetailComponent } from './pro-board/candidates/candidate-detail.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  directives: [CandidateDetailComponent],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <a md-button [routerLink]=" ['./'] ">
            Index
          </a>
          <a md-button [routerLink]=" ['./home'] ">
            Home
          </a>
          <a md-button [routerLink]=" ['./detail'] ">
            Detail
          </a>
          <a md-button [routerLink]=" ['./about'] ">
            About
          </a>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>
    
      <main>
        <router-outlet></router-outlet>
      </main>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <h2>Candidates</h2>
      <ul class="candidates">
        <li *ngFor="let candidate of candidates"
          [class.selected]="candidate === selectedCandidate"
          (click)="onSelectCandidate(candidate)">
          {{candidate.name.first}} {{candidate.name.last}}
         </li>
      </ul>

      <candidate-detail [candidate]="selectedCandidate"></candidate-detail>

      <md-card *ngIf="selectedCandidate" md-theme="dark-grey">
        <md-card-title>Selected Candidate</md-card-title>
        <md-card-content>
          {{ selectedCandidate | json }}
        </md-card-content>
      </md-card>

      <footer>
        <span id="footerText">WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
        <img [src]="angularclassLogo" width="6%">
      </footer>
    </md-content>
  `
})
export class App {
  // HACK
  public candidates = CANDIDATES;
  selectedCandidate: Candidate;
  onSelectCandidate(candidate: Candidate) {
    this.selectedCandidate = candidate;
    console.info('Selected candidate:%s', this.selectedCandidate);
  }

  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Thinkpiece Dashboard';
  url = 'https://twitter.com/AngularClass';



  constructor(
    public appState: AppState,
    private titleService: Title) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}


const CANDIDATES: Candidate[] = [
  {id: 1, name: {first: 'Brian', last: 'Davidson'}, company: 'Rackspace', email: 'kb.davidson@yahoo.com' },
  {id: 2, name: {first: 'Edward', last: 'Molinari'}, company: 'Rackspace', email: 'edward.molinari@gmail.com' },
  {id: 3, name: {first: 'Walter', last: 'Bentley'}, company: 'Rackspace', email: 'wbentley@hitchnyc.com' },
  {id: 4, name: {first: 'Aaron', last: 'Sullivan'}, company: 'Rackspace', email: 'edward.molinari@gmail.com' },
  {id: 5, name: {first: 'Robert', last: 'Ronan'}, company: 'Rackspace', email: 'robert.ronan@gmail.com' },
]

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
