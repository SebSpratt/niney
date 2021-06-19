import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { SportsState, SportsStore } from "./sports.store";

@Injectable({ providedIn: 'root' })
export class SportsQuery extends  Query<SportsState> {
    sports$ = this.select((state)=> state.sports);

    constructor(protected store: SportsStore) {
        super(store);
    }
}