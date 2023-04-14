import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SweetService {

//url: string = "http://localhost:3000"

constructor( private http: HttpClient ) {}

public donutsData={
  name: "",
  price:"",
  piece: "",
  image:"",
  id: ""
}
//carga todo
getDonuts(){
  return this.http.get('http://localhost:3000/donuts')
}
//carga individual
getDonutId(id:number){
  return this.http.get(`${'http://localhost:3000/donuts'}/${id}`)
}
//recibe los datos
postDonuts(donuts : any){
  return this.http.post('http://localhost:3000/donuts',donuts)
}
//eliminar 
deleteDonuts(id:number){
  return this.http.delete(`${'http://localhost:3000/donuts'}/${id}`)
}

public cakesData= {
  name: "",
  size: "",
  price:"",
  description:"",
  image:"",
  id: ""
}

getCakes(){
  return this.http.get('http://localhost:3000/cakes')
}
getCakeId(id:number){
  return this.http.get(`${'http://lo3000calhost:/cakes'}/${id}`)
}
// postCakes(cakes : any){
//   return this.http.post('http://localhost:3000/cakes',this.cakesData)
// }
deleteCakes(id:number){
  return this.http.delete(`${'http://localhost:3000/cakes'}/${id}`)
}

public cookiesData={
  name: "",
  piece: "",
  price:"",
  description:"",
  image:"",
  id: ""
}
getCookies(){
  return this.http.get('http://localhost:3000/cookies')
}
getCookieId(id:number){
  return this.http.get(`${'http://localhost:3000/cookies'}/${id}`)
}
// postCookies(cookies : any){
//   return this.http.post('http://localhost:3000/cookies',this.cookiesData)
// }
deleteCookies(id:number){
  return this.http.delete(`${'http://localhost:3000/cookies'}/${id}`)
}

public cupcakesData={
  name: "",
  price:"",
  piece: "",
  description:"",
  image:"",
  id: ""
}
getCupcakes(){
  return this.http.get('http://localhost:3000/cupcakes')
}
getCupcakeId(id:number){
  return this.http.get(`${'http://localhost:3000/cupcakes'}/${id}`)
}
// postCupcakes(cupcakes : any){
//   return this.http.post('http://localhost:3000/cupcakes',this.cupcakesData)
// }
deleteCupcakes(id:number){
  return this.http.delete(`${'http://localhost:3000/cupcakes'}/${id}`)
}

}
