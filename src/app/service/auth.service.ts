import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
//se pone el observable para indicar al sistema que va recibir cualquier cosa, así el data que se queja y no da error
  login(email: string, pwd: string): Observable<any>{
    return this.http.post("http://localhost:3000/login",
    {
      email:email,
      password:pwd 
    })
  }

  registrar(email: string, pwd: string, firstname: string, lastname: string, phone: number, address: string, city: string, cp: number){
    return this.http.post("http://localhost:3000/register", 
    {
      email: email,
      password: pwd,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address,
      city: city,
      cp: cp
    }
    )
  }

  cambiarEmail(userId:number, nombrenuevo:string){
    return this.http.patch(`http://localhost:3000/users/${userId}`, {firstname: nombrenuevo})
  }

//si el usuario di que no acepta cookies hay que hacer un deleteall
  logout(){
    this.cookies.delete("user");
  }
  
//si el usuario acepta hay que resetar las cookies
  setUser(user: any){
    this.cookies.set("user",JSON.stringify(user))
  }

  getUser(){
    try {
      return JSON.parse(this.cookies.get("user"))
    } catch (error) {
      return null
    }
  }

  connected():boolean{
    return this.cookies.check("user")
  }
}
