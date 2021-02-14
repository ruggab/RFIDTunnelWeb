import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entity/user';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   
    
    constructor(private http: HttpClient) {
    }

    

    login(user:User) : Observable<any>{
        let baseUrl = 'http://localhost:8080/api/v1/login';
       
        return this.http.post(`${baseUrl}`,user);
    }

    logout() {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');
    }
}