import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class WebHttpApiService {

  globalUrl : string = "https://dummy.restapiexample.com";

  getEmployee = "/api/v1/employees";
  getEmployeeById = "/api/v1/employee/";
  createEmployee = "/api/v1/create";
  updateEmployee = "/api/v1/update/";
  deleteEmployee = "/api/v1/delete/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }  


  constructor(private http : HttpClient) { }



  Get(url:string) : Observable<any>{
    return this.http.get(this.globalUrl+url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  Post(url:string,body:any) : Observable<any> {
    return this.http.post<any>(this.globalUrl+url,JSON.stringify(body),this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  Put(url:string,body:any) : Observable<any>{
    return this.http.put<any>(this.globalUrl+url,JSON.stringify(body),this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
 }

  Delete(url:string) : Observable<any>{
    return this.http.delete<any>(this.globalUrl+url,this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    window.alert(error.error.message);
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
 