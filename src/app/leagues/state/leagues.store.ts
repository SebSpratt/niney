import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { League } from "./leagues.model";

export interface LeaguesState {
    leagues: League[]
}

export function createInitialState(): LeaguesState {
    return {leagues: []};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'leagues' })
export class LeaguesStore extends Store<LeaguesState> {
    constructor() {
        super(createInitialState());
    }
}