import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cookies-id',
  templateUrl: './cookies-id.component.html',
  styleUrls: ['./cookies-id.component.scss']
})
export class CookiesIdComponent implements OnInit {
  id!: number;
  cookie!: any;
  user: any;

  constructor(private sweetService: SweetService,private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    // que usuario este conectado
    this.user = this.authService.getUser()
    //mirar ruta y guardar id
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    //llamada al servicio, petición individual
    this.sweetService.getCookieId(this.id).subscribe((data: any) => {
      this.cookie = data
    })

  }

  delete(id: number) {
    //para eiminar el cookies
    const confirmar = confirm("¿Estás seguro de que quieres eliminar?")
    if(confirmar){
      this.sweetService.deleteCookies(id).subscribe(() => {
        this.router.navigate(["/"])
      })
    }
    
  }
}