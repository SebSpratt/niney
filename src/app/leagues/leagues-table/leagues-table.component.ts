import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { League } from '../state/leagues.model';

@Component({
  selector: 'app-leagues-table',
  templateUrl: './leagues-table.component.html',
  styleUrls: ['./leagues-table.component.scss']
})
export class LeaguesTableComponent implements OnInit {
  @Input()
  set leagues(value: League[]) {
    if (value) {
      this.dataLoaded = true;
    }
    this.dataSource.data = value;
  };

  public dataLoaded = false;
  public displayedColumns = ['Sport', 'League'];
  public dataSource: MatTableDataSource<League> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
  }

}
