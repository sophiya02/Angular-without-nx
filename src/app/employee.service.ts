import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]> {
    // return [
    //   {"id":1, "name":"Andrew1", "age":30},
    // {"id":2, "name":"Andrew2", "age":31},
    // {"id":3, "name":"Andrew3", "age":32}, 
    // {"id":4, "name":"Andrew4", "age":33},
    // {"id":5, "name":"Andrew5", "age":34},
    // ]
    
    return this.http.get<IEmployee[]>(this.url).pipe(
      // catchError(this.errorHandler)
      catchError((error) => throwError(()=>error.message))
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => {error.message || "server error"});
  }

}
//1}now we have created a service
//2} we need to register this service now in the app module.
//To register a service : we need to mention in in providers in metadata in app module 
//3} we need to declare it in components we need it 