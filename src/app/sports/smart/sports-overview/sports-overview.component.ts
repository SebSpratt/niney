import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Sport } from '../../state/sports.model';
import { SportsQuery } from '../../state/sports.query';
import { SportsService } from '../../state/sports.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sports-overview',
  templateUrl: './sports-overview.component.html',
  styleUrls: ['./sports-overview.component.scss']
})
export class SportsOverviewComponent implements OnInit {
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private readonly sportsService: SportsService, private sportsQuery: SportsQuery) { }

 sports$ = this.sportsQuery.sports$;
 sports: Sport[] = [];

  ngOnInit(): void {
    this.sportsService.loadSports();

    this.sportsQuery.sports$.pipe(takeUntil(this.componentDestroyed$)).subscribe(x => this.sports = x);
  }
}
