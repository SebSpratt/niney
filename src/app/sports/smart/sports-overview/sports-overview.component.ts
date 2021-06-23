import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Sport } from '../../state/sports.model';
import { SportsQuery } from '../../state/sports.query';
import { SportsService } from '../../state/sports.service';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-sports-overview',
  templateUrl: './sports-overview.component.html',
  styleUrls: ['./sports-overview.component.scss']
})
export class SportsOverviewComponent implements OnInit {
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private readonly sportsService: SportsService, private sportsQuery: SportsQuery, private searchService: SearchService) { }

 sports$ = this.sportsQuery.sports$;
 sports: Sport[] = [];
 filteredSports: Sport[] = [];

  ngOnInit(): void {
    this.sportsService.loadSports();

    this.sportsQuery.sports$.pipe(takeUntil(this.componentDestroyed$)).subscribe(x => {this.sports = x; this.filteredSports = x});
  }

  private filter = (data: string, filter: string) => {
    return this.searchService.filter(data, filter);
  }

  searchChanged($event: any) {
    this.filteredSports = this.sports.filter(sport => this.filter(sport.strSport, $event.target.value))
  }
}
