import { Component, OnInit } from '@angular/core';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit{

  cookiesList: any[] = [];
  
  constructor (private sweetService: SweetService){}
  
  ngOnInit(): void{
    this.sweetService.getCookies().subscribe((data:any) =>{
      console.log(data)
      this.cookiesList=[...data]
    })
  }
  }
