import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SportsStore } from "./sports.store";

@Injectable({providedIn: 'root' })
export class SportsService {
    public constructor(private readonly http: HttpClient, private sportsStore: SportsStore) {}

    public loadSports() {
        this.http.get<any>("https://www.thesportsdb.com/api/v1/json/1/all_sports.php").subscribe(
            entities => {
                console.log(entities)
                console.log('------');
                console.log(entities.sports);
                this.sportsStore.update({ sports: entities.sports });
            }
        );
    }   
}