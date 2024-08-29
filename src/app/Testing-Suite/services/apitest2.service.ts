import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
 
})
export class Apitest2Service {


  private apiUrl = 'https://localhost:7161/AllMighty'; // Replace with your API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to get data from the API
  apitestmethod(): Observable<any> {
    alert ('apitestmethodworking')
    return this.http.get<any>(this.apiUrl);
  }

  // Method to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  
}
