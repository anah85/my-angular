import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';


@Component({
  selector: 'app-cakes-id',
  templateUrl: './cakes-id.component.html',
  styleUrls: ['./cakes-id.component.scss']
})
export class CakesIdComponent implements OnInit {
  id!: number;
  cake!: any;

  constructor(private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
    this.sweetService.getCakeId(this.id).subscribe((data: any) => {
      this.cake = data
    })
  }
  delete(id: number) {
    this.sweetService.deleteCakes(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }


}





