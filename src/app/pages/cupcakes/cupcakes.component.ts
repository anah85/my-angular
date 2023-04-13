import { Component, OnInit } from '@angular/core';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cupcakes',
  templateUrl: './cupcakes.component.html',
  styleUrls: ['./cupcakes.component.scss']
})
export class CupcakesComponent implements OnInit{

  cupcakesList: any[] = [];
  
  constructor (private sweetService: SweetService){}
  
  ngOnInit(): void{
    this.sweetService.getCupcakes().subscribe((data:any) =>{
      console.log(data)
      this.cupcakesList=[...data]
    })
  }
  }