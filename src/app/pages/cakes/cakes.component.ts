import { Component, OnInit } from '@angular/core';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit{

  cakesList: any[] = [];
  
  constructor (private sweetService:SweetService){}
  
  ngOnInit(): void{
    //traer todos los datos del array, hace la petición al back
    this.sweetService.getCakes().subscribe((data:any) =>{
      console.log(data)
      this.cakesList=[...data]
    })
  }
}