import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {

  email: string = ""
  pwd: string = ""
  firstname: string = ""
  lastname: string = ""
  phone: number = 670000063
  address: string = ""
  city: string = ""
  cp: number = 28002

  constructor(private authService: AuthService){}

  registrar(){
    this.authService.registrar(
      this.email,
      this.pwd,
      this.firstname,
      this.lastname,
      this.phone,
      this.address, 
      this.city,
      this.cp
      ).subscribe(data=>{ alert('¡Ha sido registrado correctamente!')},
    error=>{ alert('Error al registrar')})
  }

}
