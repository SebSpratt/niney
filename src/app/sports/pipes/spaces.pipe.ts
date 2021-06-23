import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces'
})
export class SpacesPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'TeamvsTeam': {
        return 'Team vs Team'
      }
      case 'EventSport': {
        return 'Event Sport'
      }
      default:
        return value;
    }
  }

}
