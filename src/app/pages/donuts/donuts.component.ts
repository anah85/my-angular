import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { SweetService } from 'src/app/service/sweet.service';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit{

donutsList: any[] = [];
constructor (private sweetService: SweetService){}

ngOnInit(): void{
  this.sweetService.getDonuts().subscribe((data:any) =>{
    console.log(data)
    this.donutsList=[...data]
  })
}
}