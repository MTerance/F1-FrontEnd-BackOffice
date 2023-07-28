import { Observable } from "rxjs";

export interface IApi<T> {

    getAll(nameURL : string): Observable<T>;  
    get(nameURL : string,id: any): Observable<T>;
    create(nameURL : string,data: any): Observable<T>;
    update(nameURL : string,id: any, data: any): Observable<T>;
    delete(nameURL : string,id: any): Observable<T>;
  
  }

  
export abstract class ApiAbstract {


}


