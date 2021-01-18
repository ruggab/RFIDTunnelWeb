import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 
@Injectable({ 
  providedIn: 'root'
}) 
export class FileUploadService { 
    
  
    
  constructor(private http:HttpClient) { } 
  
  // Returns an observable 
  uploadAvvocati(file:File):Observable<any> { 
    // API url 
      let baseApiUrl = "http://localhost:8080/api/importAvvocati"
  
      // Create form data 
      const formData = new FormData();  
        
      // Store form name as "file" with file data 
      formData.append("file", file, file.name); 
        
      // Make http post request over api 
      // with formData as req 
      //return this.http.get(`${this.baseApiUrl}`);
      return this.http.post(`${baseApiUrl}`, formData) ;
      
  } 
} 