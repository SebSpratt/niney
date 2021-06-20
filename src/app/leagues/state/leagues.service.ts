import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LeaguesStore } from "./leagues.store";

@Injectable({providedIn: 'root' })
export class LeaguesService {
    public constructor(private readonly http: HttpClient, private leaguesStore: LeaguesStore) {}

    public loadLeagues() {
        this.http.get<any>("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php").subscribe(
            entities => {
                console.log('abc');
                console.log(entities);
                this.leaguesStore.update({ leagues: entities.leagues });
            }
        );
    }   
}