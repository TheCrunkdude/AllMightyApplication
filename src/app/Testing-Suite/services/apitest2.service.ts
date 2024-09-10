import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Body2 } from '../test-component/test-component.component';
import { EmployeeTable } from '../interfaces/employeetable';

@Injectable({
  providedIn: 'root',

})

export class Apitest2Service {


  private apiUrl = 'https://localhost:7288/'; // Replace with your API endpoint


  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to get data from the API
  apitestmethod(): Observable<any> {
    //MODIFY THIS SERBVICES ACCORDING TO THE REQUIREMENTS, THIS WILL GET THE RESPONSE AS INDICATED IN THE API RESPONSE
    return this.http.get(this.apiUrl+'GetAllMightyAPI', { responseType: 'text' });
  }

  //WRITE SOME OTHER METHODS FOR POST, UPDATE AND DELETE AND HOOK THEM ACCORDINGLY WITH THE API 
  //==>
  GetemployeesMethod(): Observable<EmployeeTable[]> {
    return this.http.get<EmployeeTable[]>(this.apiUrl+ 'GetEmployees');
  }

  apipostmethod(body: EmployeeTable): Observable<any> {
    return this.http.post(this.apiUrl + 'CreateEmployee', body, { responseType: 'text' });
  }

  apiputmethod(body: EmployeeTable): Observable<any> {
    return this.http.put(this.apiUrl + 'UpdateEmployee', body, { responseType: 'text' });
  }

  apideletemethod(propiedad1: number): Observable<any> {
    const finalurl= this.apiUrl + 'DeleteEmployee?employeeID=' + propiedad1
    return this.http.delete(finalurl, { responseType: 'text' });

  }


  // Method to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
