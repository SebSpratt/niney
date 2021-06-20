import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { CountriesState, CountriesStore } from "./countries.store";

@Injectable({ providedIn: 'root' })
export class CountriesQuery extends  Query<CountriesState> {
    countries$ = this.select((state)=> state.countries);

    constructor(protected store: CountriesStore) {
        super(store);
    }
}