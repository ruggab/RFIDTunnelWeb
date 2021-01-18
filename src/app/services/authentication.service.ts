import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    
    constructor(private http: HttpClient) {
    }

    

    login(usr:string, psw:string) : Observable<any>{
        let baseUrl = 'http://localhost:8080/api/v1/login';
        let params = new HttpParams();
        // Begin assigning parameters
        params = params.append('user', usr);
        params = params.append('password', psw);
        return this.http.get(`${baseUrl}`,{ params: params });
    }

    logout() {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');
    }
}