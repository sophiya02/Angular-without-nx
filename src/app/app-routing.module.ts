import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  // {path: "", redirectTo:'/departments',pathMatch:'prefix'},
  // {path: "", redirectTo:'/department',pathMatch:'full'},
  // {path:'departments', component: DepartmentListComponent},
  // { path: 'employees', component: EmployeeListComponent },
  // { path: 'departments/:id', component: DepartmentDetailComponent},
  // {path: "**", component: EmployeeListComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent];
