import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <!--<h3>
      Department List
    </h3>
    <ul class="items">
    <li (click)="onSelect(dep)" [class.selected]="isSelected(dep)" *ngFor="let dep of departments">
    <span class="badge">{{dep.id}} </span>{{dep.name}}
    </li>
    </ul>
    -->

  `,
  styles: [
    `
      .selected{
        color: blue;
      }
    `
  ]
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},

  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
selectedId : number=0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id') as string);
      this.selectedId=id;
      // console.log(params);
    })
  }
  onSelect(dep: {"id":number, "name": string}){
    // this.router.navigate(['/departments', dep.id]);
    this.router.navigate([dep.id], {relativeTo: this.route});
  }
 isSelected(department:{"id":number, "name":string} ){
   return department.id===this.selectedId;
 }
}
