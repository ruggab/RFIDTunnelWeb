import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reader } from '../entity/reader';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  
  

  constructor(private http: HttpClient) { }

  getTipoReader(id: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReader';
    return this.http.get(`${baseUrl}/${id}`);
  }

  getReaderById(id: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/reader';
    return this.http.get(`${baseUrl}/${id}`);
  }

  createReader(readerForm:Reader): Observable<Object> {
    let baseUrl = "";
    if (readerForm.idTipoReader == 1) {
        baseUrl = 'http://localhost:8080/api/v1/creaReaderInpinj';
    } else {
        baseUrl = 'http://localhost:8080/api/v1/creaReaderWirama';
    }
    
    return this.http.post(`${baseUrl}`, readerForm);
  }


  updateReader(reader:Reader): Observable<Object> {
    //let baseUrl = 'http://localhost:8080/api/v1/updateReader';
    let baseUrl = "";
    if (reader.idTipoReader == 1) {         
        baseUrl = 'http://localhost:8080/api/v1/updateReaderInpinj';
    } else {
        baseUrl = 'http://localhost:8080/api/v1/updateReaderWirama';
    }
    return this.http.put(`${baseUrl}`, reader);
  }

  deleteReader(id: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/deleteReader';
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  getReaderList(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/allreader';
    return this.http.get(`${baseUrl}`);
  }

  getAntennaList(idReader: number): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/allAntenna';
    return this.http.get(`${baseUrl}/${idReader}`);
  }


  getTipoReaderList(): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/tipoReaderList';
    return this.http.get(`${baseUrl}`);
  }
  

  startReader(readerForm:Object): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/startReader';
    return this.http.post(`${baseUrl}`, readerForm);
  }

  stopReader(readerForm:Object): Observable<any> {
    let baseUrl = 'http://localhost:8080/api/v1/stopReader';
    return this.http.post(`${baseUrl}`, readerForm);
  }

  
}
