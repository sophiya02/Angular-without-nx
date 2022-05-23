import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { O_DIRECTORY } from 'constants';

@Component({
  selector: 'app-employee-list',
  // templateUrl: './employee-list.component.html',
  template:`
      <h2>Welcome to EmployeeList</h2>
      <h3>Employee List</h3>
      <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
      </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees=[
    {"id":1, "name":"Andrew1", "age":30},
    {"id":2, "name":"Andrew2", "age":31},
    {"id":3, "name":"Andrew3", "age":32}, 
    {"id":4, "name":"Andrew4", "age":33},
    {"id":5, "name":"Andrew5", "age":34},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
// Programming principles: 1)Dry
// 2)Single responsibility principle:-> a class should be Responsible only for a single action 
// here to create logic of the html 
// but in this example class is creating logic as well as Data
// : so to overcome this we need Service
// a service is a class with a specific purpose.
// 1) we need to share data among different Component
// 2) implement application logic-reusable code independent of HTML component (only the logic part not the output view)
// 3) external interaction: connect to data base 
// naming convention : ends with: .service.ts
