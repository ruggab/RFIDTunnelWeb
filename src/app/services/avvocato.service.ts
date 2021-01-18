import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AvvocatoService {

  
  private baseUrl = 'http://localhost:8080/api/avvocati';

  constructor(private http: HttpClient) { }

  getAvvocato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAvvocato(avvocato: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, avvocato);
  }

  updateAvvocato(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAvvocato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAvvocatoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getNumPecDaInviare(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/numPecDaInviare';
    return this.http.get(`${baseUrl}`);
  }

  getNumMailDaInviare(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/numMailDaInviare';
    return this.http.get(`${baseUrl}`);
  }

  inviaPec(inviaForm:Object): Observable<Object> {
    let baseUrl = 'http://localhost:8080/api/inviaPec';
    console.log("---->" + inviaForm);
   
    return this.http.post(`${baseUrl}`,inviaForm);
  }

  inviaMail(inviaForm:Object): Observable<Object> {
    let baseUrl = 'http://localhost:8080/api/inviaMail';
    console.log("---->" + inviaForm);
   
    return this.http.post(`${baseUrl}`,inviaForm);
  }
}
