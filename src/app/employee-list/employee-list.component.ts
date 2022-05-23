import { Component,  OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  employees: { "id": number, "name":string, "age":number}[] = [];
//dependency
  constructor( private _emplyeeService: EmployeeService) { }

  ngOnInit(): void {
    
    //we need to make use of _employeeService instance and fetch the data
    // this.employees = this._emplyeeService.getEmployees();
    // this._emplyeeService.getEmployees().subscribe(data=>{
    //   this.employees=data;

    //   // console.log(data);
    // },
    // err => console.log(err));
    this._emplyeeService.getEmployees().subscribe({
      next: data=>{this.employees=data},
      error: (err)=>console.log(err)
    });
  
  }
  //ngOnInit, afterView, allDecay are lifecycle events;

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
// how to use service? === by dependency injection 
// why DI(dependency injection???)
//lets say car class needs engine and tire which are also a class and car class has engine and tire as variables and constructor for engine and tires eg: class car{
//   engine ;
//   tires ;
//   constructor(){
//     this.engine= new engine();
//     this.tires= new tires();
//   }
// }
// class engine{
//   constructor(){};
// }
// class tire{
//   constructor(){};
// }
// now lets suppose engine constructor needs parameter, so if we change engine we need to change car as well therefor our code is not flexible and we use dependency injection 
//DI as design pattern
//DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself.
// so here we now have
// class car{
  //   engine ;
  //   tires ;
  //   constructor(engine, tires){
  //     this.engine= engine;
  //     this.tires=tires;
  //   }
  // }

  // but now we need to create these dependency ourself, 
  // like depA, depB, depC, depD, depE(depD)..and so on 
  // newCar(depA, depB, depC, depD, depE) so to overcome this load we need angular's dependency framework
  //steps how to use service:
  //1) create the service 
  //2) register the service with angular built in injector class
  //3) declare the service as dependency in the class that needs it 
