import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }


    public doRegitration(user) {
        return this.http.post("http://localhost:8080/CoachLogin/create",user);
      
    }
  
}
