import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://localhost:7279/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService<T> {

  constructor(private httpClient: HttpClient) {

   }

   getAll(nameURL : string): Observable<T[]> {
    console.log(`${API_URL}/${nameURL}`);
    return this.httpClient.get<T[]>(`${API_URL}/${nameURL}`);
   }

    get(nameURL : string,id: number): Observable<T> {
    return this.httpClient.get<T>(`${API_URL}/${nameURL}/${id}`);
    }

    create(nameURL : string,data: any): Observable<T> {
    return this.httpClient.post<T>(`${API_URL}/${nameURL}`, data);
    }

    update(nameURL : string,id: number, data: any): Observable<T> { 
    return this.httpClient.patch<T>(`${API_URL}/${nameURL}/${id}`, data);
    }

    delete(nameURL : string,id: number): Observable<T> {
    return this.httpClient.delete<T>(`${API_URL}/${nameURL}/${id}`);
    }
}
