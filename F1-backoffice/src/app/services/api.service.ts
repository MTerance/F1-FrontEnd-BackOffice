import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://localhost:7279/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) {

   }

   getAll(nameURL : string): Observable<any> {
    return this.httpClient.get(`${API_URL}/${nameURL}`);
   }

    get(nameURL : string,id: any): Observable<any> {
    return this.httpClient.get(`${API_URL}/${nameURL}/${id}`);
    }

    create(nameURL : string,data: any): Observable<any> {
    return this.httpClient.post(`${API_URL}/${nameURL}`, data);
    }

    update(nameURL : string,id: any, data: any): Observable<any> { 
    return this.httpClient.patch(`${API_URL}/${nameURL}/${id}`, data);
    }

    delete(nameURL : string,id: any): Observable<any> {
    return this.httpClient.delete(`${API_URL}/${nameURL}/${id}`);
    }
}
