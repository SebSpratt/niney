import { Component, OnInit } from '@angular/core';
import { Country } from '../state/countries.model';
import { CountriesQuery } from '../state/countries.query';
import { CountriesService } from '../state/countries.service';

@Component({
  selector: 'app-countries-card',
  templateUrl: './countries-card.component.html',
  styleUrls: ['./countries-card.component.scss']
})
export class CountriesCardComponent implements OnInit {

  constructor(private readonly countriesService: CountriesService, private countriesQuery: CountriesQuery) { }

 countries: Country[] = [];

  ngOnInit(): void {
    this.countriesService.loadCountries();

    this.countriesQuery.countries$.subscribe(x => this.countries = x);
  }

}
