import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SweetService } from 'src/app/service/sweet.service';


@Component({
  selector: 'app-cakes-id',
  templateUrl: './cakes-id.component.html',
  styleUrls: ['./cakes-id.component.scss']
})
export class CakesIdComponent implements OnInit {
  id!: number;
  cake!: any;
  user: any;

  constructor(private sweetService: SweetService, private authService:AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    // que usuario este conectado
    this.user = this.authService.getUser()
    //mirar ruta y guardar id
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    //llamada al servicio, petición individual
    this.sweetService.getCakeId(this.id).subscribe((data: any) => {
      this.cake = data
    })
  }
  //para eiminar cakes
  delete(id: number) {
    const confirmar = confirm("¿Estás seguro de que quieres eliminar?")
    if(confirmar){
    this.sweetService.deleteCakes(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
}
}





