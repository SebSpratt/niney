import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../../state/sports.model';
import { SportsQuery } from '../../state/sports.query';
import { SportsService } from '../../state/sports.service';

@Component({
  selector: 'app-sports-card',
  templateUrl: './sports-card.component.html',
  styleUrls: ['./sports-card.component.scss']
})
export class SportsCardComponent implements OnInit {

  constructor(private readonly sportsService: SportsService, private sportsQuery: SportsQuery) { }

 sports$ = this.sportsQuery.sports$;
 sports: Sport[] = [];

  ngOnInit(): void {
    this.sportsService.loadSports();

    this.sportsQuery.sports$.subscribe(x => this.sports = x);
  }

}
