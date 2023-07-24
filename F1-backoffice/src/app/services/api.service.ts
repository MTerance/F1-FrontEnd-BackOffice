import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:3000/asset';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) {

   }

   getAll(): Observable<any> {
    return this.httpClient.get(API_URL);
   }

    get(id: any): Observable<any> {
    return this.httpClient.get(`${API_URL}/${id}`);
    }

    create(data: any): Observable<any> {
    return this.httpClient.post(API_URL, data);
    }

    update(id: any, data: any): Observable<any> { 
    return this.httpClient.patch(`${API_URL}/${id}`, data);
    }

    delete(id: any): Observable<any> {
    return this.httpClient.delete(`${API_URL}/${id}`);
    }
}
