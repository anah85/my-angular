import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-donuts-id',
  templateUrl: './donuts-id.component.html',
  styleUrls: ['./donuts-id.component.scss']
})
export class DonutsIdComponent  implements OnInit{
  id!: number;
  donut!: any;
  donutsForm!: FormGroup;
  @Input() newDonut!:any;
  constructor(private formBuilder: FormBuilder, private sweetService: SweetService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  public newDonuts = this.sweetService.donutsData;
  public donutsId = this.sweetService.donutsData.id;

  ngOnInit(): void{
  this.activatedRoute.paramMap.subscribe(elemento =>{
    this.id =Number(elemento.get("id"));
  })
  this.sweetService.getDonutId(this.id).subscribe((data:any)=>{
    this.donut = data
  });

  this.donutsForm = this.formBuilder.group({
    name:[this.newDonuts.name,[Validators.required, Validators.minLength(1)]],
    price:[this.newDonuts.price,[Validators.required]],
    piece:[this.newDonuts.piece,[Validators.required]],
    image:[this.newDonuts.image,[Validators.required, Validators.minLength(1)]],
  });
  this.donutsForm.valueChanges.subscribe((changes) => {
    this.newDonuts = changes;
  });
  }
  delete(id: number) {
    this.sweetService.deleteDonuts(id).subscribe(() => {
      this.router.navigate(["/"])
    })
  }

  onSubmit(){
    this.sweetService.postDonuts(this.newDonuts).subscribe((data)=> {
      this.router.navigate(["/donuts"])
    })
    this.donutsForm.reset();
    
  }
  }
  