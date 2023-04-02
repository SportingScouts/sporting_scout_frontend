import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  get(path: string, params: any = {}): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params
    };

    return this.http.get<T>(`${this.apiUrl}${path}`, options);
  }

  post(path: string, body: any = {}): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<T>(`${this.apiUrl}${path}`, body, options);
  }

  put(path: string, body: any = {}): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<T>(`${this.apiUrl}${path}`, body, options);
  }

  delete(path: string): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<T>(`${this.apiUrl}${path}`, options);
  }
}
