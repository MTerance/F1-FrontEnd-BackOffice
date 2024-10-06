import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/*
const API_URL = process.env['API_ADRESS'] as string;
const API_KEY = process.env['API_KEY'] as string;
*/

const API_URL = environment.API_ADRESS as string;
const API_KEY = environment.API_KEY as string;


@Injectable({
  providedIn: 'root'
})

export class ApiService<T> {

  private readonly header = new HttpHeaders({'ApiKey': API_KEY});


  constructor(private httpClient: HttpClient) {
   }

   getAll(nameURL : string): Observable<T[]> {
    console.log(`${API_URL}/${nameURL}`);
    return this.httpClient.get<T[]>(`${API_URL}/${nameURL}`, {headers: this.header });
   }

    get(nameURL : string,id: number): Observable<T> {
    return this.httpClient.get<T>(`${API_URL}/${nameURL}/${id}`, {headers: this.header });
    }

    create(nameURL : string,data: any): Observable<T> {
    return this.httpClient.post<T>(`${API_URL}/${nameURL}`, data, {headers: this.header });
    }

    update(nameURL : string,id: number, data: any): Observable<T> { 
    return this.httpClient.patch<T>(`${API_URL}/${nameURL}/${id}`, data, {headers: this.header });
    }

    delete(nameURL : string,id: number): Observable<T> {
    return this.httpClient.delete<T>(`${API_URL}/${nameURL}/${id}`, {headers: this.header });
    }
}
