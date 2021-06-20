import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../state/countries.model';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {
  @Input()
  set countries(value: Country[]) {
    if (value) {
      this.dataLoaded = true;
    }
    this.dataSource.data = value;
  };

  public dataLoaded = false;
  public displayedColumns = ['Sport'];
  public dataSource: MatTableDataSource<Country> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
  }

}
