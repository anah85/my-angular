import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  pwd: string = ""
  error: string = ""

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      this.error = ""
      this.authService.setUser(data.user)
      this.router.navigateByUrl("/perfil")
    },
    ex=>{
      this.error =ex.error
    })
  }
}
