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


  private apiUrl = 'https://localhost:7161/'; // Replace with your API endpoint


  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to get data from the API
  apitestmethod(): Observable<any> {
    //MODIFY THIS SERBVICES ACCORDING TO THE REQUIREMENTS, THIS WILL GET THE RESPONSE AS INDICATED IN THE API RESPONSE
    alert('request to ' + this.apiUrl)
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }

  //WRITE SOME OTHER METHODS FOR POST, UPDATE AND DELETE AND HOOK THEM ACCORDINGLY WITH THE API 
  //==>
  GetemployeesMethod(): Observable<EmployeeTable[]> {
    return this.http.get<EmployeeTable[]>(this.apiUrl+ 'GetEmployees');
  }

  apipostmethod(body: EmployeeTable): Observable<any> {
    return this.http.post(this.apiUrl + 'CreateEmployee', body, { responseType: 'text' });
  }

  apiputmethod(propiedad1: string, propiedad2: boolean): Observable<any> {
    const finalurl= this.apiUrl + '?propiedad1=' + propiedad1 + '&propiedad2=' +propiedad2
    return this.http.put<string>(finalurl, null, { responseType: 'json' }  );

  }

  apideletemethod(propiedad1: string, propiedad2: boolean): Observable<any> {
    const finalurl= this.apiUrl + '?propiedad1=' + propiedad1 + '&propiedad2=' +propiedad2
    return this.http.delete<string>(finalurl, { responseType: 'json' }  );

  }


  // Method to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
