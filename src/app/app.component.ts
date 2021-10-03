import { Component } from '@angular/core';



export interface PeriodicElement {
  iconname: any;
  devloper: string;
  weight: any;
  buttons: any;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { devloper: 'web Flow Standar',
  iconname: true, weight: 780, buttons: false },
  { devloper: 'Web Flow Pro', iconname: false, 
  weight: '1.7k', buttons: false },
  { devloper: 'Bussiness Consulting', iconname: false,
   weight: '120/hour', buttons: true },
  { devloper: 'UI/UX Design Service', iconname: true,
   weight: '120/hour', buttons: true },
  { devloper: 'Product Testing', iconname: false, 
  weight: '120/hour', buttons: true },
  { devloper: 'Front End Development', iconname: true,
   weight: '120/hour', buttons: true },
  { devloper: 'Back End Devlopment', iconname: true,
   weight: '120/hour', buttons: true },
  { devloper: 'Service Design', iconname: true, 
  weight: '120/hour', buttons: true }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularmaterialBox';
  displayedColumns: string[] = ['devloper', 'iconname', 'weight', 'buttons'];
  dataSource = ELEMENT_DATA;
  

  }



