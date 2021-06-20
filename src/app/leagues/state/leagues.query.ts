import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { LeaguesState, LeaguesStore } from "./leagues.store";

@Injectable({ providedIn: 'root' })
export class LeaguesQuery extends  Query<LeaguesState> {
    leagues$ = this.select((state)=> state.leagues);

    constructor(protected store: LeaguesStore) {
        super(store);
    }
}