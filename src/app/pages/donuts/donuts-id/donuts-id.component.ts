import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
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
    this.sweetService.deleteDonuts(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
}