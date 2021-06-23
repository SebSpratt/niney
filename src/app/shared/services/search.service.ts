import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() { }

  public filter = (data: string, filter: string) => {
    if (filter) {
      return data.toLowerCase().includes(filter.toLowerCase());
    }
    return true;
  }
}
