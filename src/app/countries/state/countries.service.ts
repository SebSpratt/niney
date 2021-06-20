import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CountriesStore } from "./countries.store";

@Injectable({providedIn: 'root' })
export class CountriesService {
    public constructor(private readonly http: HttpClient, private countriesStore: CountriesStore) {}

    public loadCountries() {
        this.http.get<any>("https://www.thesportsdb.com/api/v1/json/1/all_countries.php").subscribe(
            entities => {
                console.log('abc');
                console.log(entities);
                this.countriesStore.update({ countries: entities.countries });
            }
        );
    }   
}