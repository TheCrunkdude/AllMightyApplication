import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
 
})
export class Apitest2Service {


  private apiUrl = 'https://localhost:7173/AllMightyConfiguration'; // Replace with your API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to get data from the API
  apitestmethod(): Observable<any> {
    //MODIFY THIS SERBVICES ACCORDING TO THE REQUIREMENTS, THIS WILL GET THE RESPONSE AS INDICATED IN THE API RESPONSE
    alert ('request to ' + this.apiUrl)
    return this.http.get(this.apiUrl, {responseType: 'text'});
  }

  //WRITE SOME OTHER METHODS FOR POST, UPDATE AND DELETE AND HOOK THEM ACCORDINGLY WITH THE API 
  //==>

  // Method to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  
}
