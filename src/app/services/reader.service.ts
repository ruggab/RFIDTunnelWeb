import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  
  

  constructor(private http: HttpClient) { }

  getReader(id: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReader';
    return this.http.get(`${baseUrl}/${id}`);
  }

  createReader(readerForm:Object): Observable<Object> {
    let baseUrl = 'http://localhost:8080/api/v1/creaReader';
    console.log("---->" + readerForm);
    return this.http.post(`${baseUrl}`, readerForm);
  }


  updateReader(id: number, value: any): Observable<Object> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReader';
    return this.http.put(`${baseUrl}/${id}`, value);
  }

  deleteReader(id: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReader';
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  getReaderList(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReader';
    return this.http.get(`${baseUrl}`);
  }


  getTipoReaderList(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReaderList';
    return this.http.get(`${baseUrl}`);
  }
  

  

  

  
}
