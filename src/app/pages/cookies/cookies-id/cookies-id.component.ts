import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-cookies-id',
  templateUrl: './cookies-id.component.html',
  styleUrls: ['./cookies-id.component.scss']
})
export class CookiesIdComponent implements OnInit {
  id!: number;
  cookie!: any;

  constructor(private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    this.sweetService.getCookieId(this.id).subscribe((data: any) => {
      this.cookie = data
    })

  }

  delete(id: number) {
    this.sweetService.deleteCookies(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
}