import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Country } from "./countries.model";

export interface CountriesState {
    countries: Country[]
}

export function createInitialState(): CountriesState {
    return {countries: []};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'countries' })
export class CountriesStore extends Store<CountriesState> {
    constructor() {
        super(createInitialState());
    }
}