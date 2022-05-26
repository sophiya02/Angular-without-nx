import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { StructuralDerivativesComponent } from './structural-derivatives/structural-derivatives.component';
import { PipeComponent } from './pipe/pipe.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { MaterialModule } from './material/material.module';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    StructuralDerivativesComponent,
    PipeComponent,
    routingComponents,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
