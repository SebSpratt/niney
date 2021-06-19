import { Injectable } from "@angular/core";
import { EntityState, EntityStore, Store, StoreConfig } from "@datorama/akita";
import { Sport } from "./sports.model";

export interface SportsState {
    sports: Sport[]
}

export function createInitialState(): SportsState {
    return {sports: []};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sports' })
export class SportsStore extends Store<SportsState> {
    constructor() {
        super(createInitialState());
    }
}