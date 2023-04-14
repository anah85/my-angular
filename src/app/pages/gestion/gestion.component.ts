import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  
 donutsForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private sweetService: SweetService, private router: Router) {}
 //trae la info, por defecto, del servicio
  public newDonuts = this.sweetService.donutsData;
  public donutsId = this.sweetService.donutsData.id;
//construcción
  ngOnInit(): void {
 this.donutsForm = this.formBuilder.group({
      name:[this.newDonuts.name,[Validators.required, Validators.minLength(1)]],
      price:[this.newDonuts.price,[Validators.required]],
      piece:[this.newDonuts.piece,[Validators.required]],
      image:[this.newDonuts.image,[Validators.required, Validators.minLength(1)]],
    });
    //recogiendo datos del formulario y actualización
    this.donutsForm.valueChanges.subscribe((changes) => {
      this.newDonuts = changes;
    });
  }
  onSubmit(){
this.sweetService.postDonuts(this.newDonuts).subscribe((data)=> {
this.router.navigate(["/donuts"])
})
this.donutsForm.reset();
  }
}
