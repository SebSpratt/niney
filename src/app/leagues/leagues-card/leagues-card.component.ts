import { Component, OnInit } from '@angular/core';
import { League } from '../state/leagues.model';
import { LeaguesQuery } from '../state/leagues.query';
import { LeaguesService } from '../state/leagues.service';

@Component({
  selector: 'app-leagues-card',
  templateUrl: './leagues-card.component.html',
  styleUrls: ['./leagues-card.component.scss']
})
export class LeaguesCardComponent implements OnInit {

  constructor(private readonly leaguesService: LeaguesService, private leaguesQuery: LeaguesQuery) { }

 leagues: League[] = [];

  ngOnInit(): void {
    this.leaguesService.loadLeagues();

    this.leaguesQuery.leagues$.subscribe(x => this.leagues = x);
  }

}
