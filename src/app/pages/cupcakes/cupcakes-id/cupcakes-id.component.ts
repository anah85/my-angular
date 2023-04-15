import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cupcakes-id',
  templateUrl: './cupcakes-id.component.html',
  styleUrls: ['./cupcakes-id.component.scss']
})
export class CupcakesIdComponent implements OnInit{
  //trae e id y la info cupcakes
  id!: number;
  cupcake!: any;
  user: any;

  constructor(private sweetService: SweetService,private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  
  ngOnInit(): void{
    //mirar ruta y guardar id, que usuario este conectado
  this.user = this.authService.getUser()
  this.activatedRoute.paramMap.subscribe(params =>{
  this.id =Number(params.get("id"));
  })
  //llamada al servicio, petición individual
  this.sweetService.getCupcakeId(this.id).subscribe((data:any)=>{
    this.cupcake = data
  })
  }
//para eiminar cupcakes
  delete(id: number) {
     const confirmar = confirm("¿Estás seguro de que quieres eliminar?")
    if(confirmar){
    this.sweetService.deleteCupcakes(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
  }
}
  