import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sport } from '../state/sports.model';

@Component({
  selector: 'app-sports-table',
  templateUrl: './sports-table.component.html',
  styleUrls: ['./sports-table.component.scss']
})
export class SportsTableComponent implements OnInit {
  @Input()
  set sports(value: Sport[]) {
    if (value) {
      this.dataLoaded = true;
    }
    this.dataSource.data = value;
  };

  public dataLoaded = false;
  public displayedColumns = ['Sport', 'Format'];
  public dataSource: MatTableDataSource<Sport> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
  }

}
