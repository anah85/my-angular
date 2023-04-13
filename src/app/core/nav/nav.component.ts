import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SweetService } from 'src/app/service/sweet.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: any = null

constructor(private authService: AuthService, sweetService:SweetService,  private router: Router){}

  ngOnInit(): void {
    //hace que se actualize el "user", así no hace falta hacer f5
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.user = this.authService.getUser()
      }
    })
   
  }




}
