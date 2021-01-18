import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject!: BehaviorSubject<User>;
    public currentUser!: Observable<User>  | null;
   
    
    constructor(private http: HttpClient) {
        //let obUser = sessionStorage.getItem('currentUser');
        //if (obUser != null) {
        //    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(obUser));
        //    this.currentUser = this.currentUserSubject.asObservable();
        //}
    }

    public get currentUserValue(): User | null {
        //user:User;
        let user = (this.currentUserSubject != undefined && this.currentUserSubject != null) ? 
        this.currentUserSubject.value : null;
        //
        return user;
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
        this.currentUserSubject.next(new User);
    }
}