import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cupcakes-id',
  templateUrl: './cupcakes-id.component.html',
  styleUrls: ['./cupcakes-id.component.scss']
})
export class CupcakesIdComponent implements OnInit{
  id!: number;
  cupcake!: any;
  
  constructor(private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  
  ngOnInit(): void{
  this.activatedRoute.paramMap.subscribe(elemento =>{
    this.id =Number(elemento.get("id"));
  })
  this.sweetService.getCupcakeId(this.id).subscribe((data:any)=>{
    this.cupcake = data
  })
  }

  delete(id: number) {
    this.sweetService.deleteCupcakes(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
  }
  