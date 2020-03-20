import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  //apiUrl: string = 'enter-your-api-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // createTask(data): Observable<any> {
  //   let API_URL = `${this.apiUrl}/create-task`;
  //   return this.http.post(API_URL, data)
  //     .pipe(
  //       catchError(this.error)
  //     )
  // }
  getStudentData() {
    return this.http.get('https://reqres.in/api/users');

  }
  getStudentDatabyId(id){
    return this.http.get('https://reqres.in/api/users/' + id );
  }
  updateStdData(saveStdDetails, id){
    return this.http.put('https://reqres.in/api/users/'+id, saveStdDetails);
  }
}
