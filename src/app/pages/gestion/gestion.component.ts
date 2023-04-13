import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetService } from 'src/app/service/sweet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit{
  gestionForm!: FormGroup;
  resenasList: any[] = [];

constructor(private formBuilder: FormBuilder, private sweetService: SweetService, private router: Router){}
//llamando la info que viene del servicio
public newGestion = this.sweetService.gestionData;
public gestionId = this.sweetService.gestionData.id;

ngOnInit() : void{
  //datos requeridos del formulario
this.gestionForm = this.formBuilder.group({
  title:[this.newGestion.title,[Validators.required]],
  message:[this.newGestion.message,[Validators.required, Validators.minLength(5)]],
  stars:[this.newGestion.stars,[Validators.required]],
});
//actualizando y guardando datos del formulario
this.gestionForm.valueChanges.subscribe(changes=>{
  this.newGestion =changes
})
}
//aquí llega la info
onSubmit(){
  this.sweetService.postGestion(this.newGestion).subscribe((data)=>{
    this.router.navigate(["/note"])
  })
}

}
