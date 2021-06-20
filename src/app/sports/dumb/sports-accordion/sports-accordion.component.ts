// import { Component, Input, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { Sport } from '../../state/sports.model';

import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { Sport } from "../../state/sports.model";

// @Component({
//   selector: 'app-sports-accordion',
//   templateUrl: './sports-accordion.component.html',
//   styleUrls: ['./sports-accordion.component.scss']
// })
// export class SportsAccordionComponent implements OnInit {
//   @Input()
//   set sports(value: Sport[]) {
//     if (value) {
//       this.dataLoaded = true;
//     }
//     this.dataSource.data = value;
//   };

//   public dataLoaded = false;
//   public displayedColumns = ['Sport', 'Format'];
//   expandedElement: Sport | null;
//   // dataSource = ELEMENT_DATA;
//   // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
//   // expandedElement: PeriodicElement | null;
//   public dataSource: MatTableDataSource<Sport> = new MatTableDataSource();

//   constructor() {}

//   ngOnInit(): void {
//   }

// }






@Component({
  selector: 'app-sports-accordion',
  templateUrl: './sports-accordion.component.html',
  styleUrls: ['./sports-accordion.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SportsAccordionComponent {
  @Input()
    set sports(value: Sport[]) {
      if (value) {
        this.dataLoaded = true;
      }
      this.dataSource = value;
    };

  public dataLoaded = false;
  public dataSource: Sport[] = [];
  columnsToDisplay = ['Sport', 'Format'];
  expandedElement: Sport | null | undefined;
};