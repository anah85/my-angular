import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-donuts-id',
  templateUrl: './donuts-id.component.html',
  styleUrls: ['./donuts-id.component.scss']
})
export class DonutsIdComponent  implements OnInit {
  //trae e id y la info de donuts
  id!: number;
  donut!: any;
  user: any;

  constructor(private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router,private authService: AuthService) { }

ngOnInit(): void {
  // que usuario este conectado
    this.user = this.authService.getUser()
    //mirar ruta y guardar id
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    //llamada al servicio, petición individual
    this.sweetService.getDonutId(this.id).subscribe((data: any) => {
      this.donut = data
    })

  }
 //para eiminar el donuts
  delete(id: number) {
    const confirmar = confirm("¿Estás seguro de que quieres eliminar?")
    if(confirmar){
      this.sweetService.deleteDonuts(id).subscribe(() => {
      this.router.navigate(["/"])
      })
    }
   
  }
}