import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SweetService {

//url: string = "http://localhost:3000"

constructor( private http: HttpClient ) {}
public gestionData={
  title:"",
  message:"",
  stars:"",
  id: ""
}

public cakesData= {
  name: "",
  size: "",
  price:"",
  description:"",
  image:"",
  id: ""
}
public cookiesData={
  name: "",
  piece: "",
  price:"",
  description:"",
  image:"",
  id: ""
}
public cupcakesData={
  name: "",
  price:"",
  piece: "",
  description:"",
  image:"",
  id: ""
}
public donutsData={
  name: "",
  price:"",
  piece: "",
  image:"",
  id: ""
}

getGestion(){
  return this.http.get('http://localhost:3000/note')
}
getCakes(){
  return this.http.get('http://localhost:3000/cakes')
}
getCookies(){
  return this.http.get('http://localhost:3000/cookies')
}
getCupcakes(){
  return this.http.get('http://localhost:3000/cupcakes')
}
getDonuts(){
  return this.http.get('http://localhost:3000/donuts')
}

getGestionId(id:number){
  return this.http.get(`${'http://localhost:3000/note'}/${id}`)
}
getCakeId(id:number){
  return this.http.get(`${'http://lo3000calhost:/cakes'}/${id}`)
}
getCookieId(id:number){
  return this.http.get(`${'http://localhost:3000/cookies'}/${id}`)
}
getCupcakeId(id:number){
  return this.http.get(`${'http://localhost:3000/cupcakes'}/${id}`)
}
getDonutId(id:number){
  return this.http.get(`${'http://localhost:3000/donuts'}/${id}`)
}

postGestion(gestion : any){
  return this.http.post('http://localhost:3000/note',this.gestionData)
}
postCakes(cakes : any){
  return this.http.post('http://localhost:3000/cakes',this.cakesData)
}
postCookies(cookies : any){
  return this.http.post('http://localhost:3000/cookies',this.cookiesData)
}
postCupcakes(cupcakes : any){
  return this.http.post('http://localhost:3000/cupcakes',this.cupcakesData)
}
postDonuts(donuts : any){
  return this.http.post('http://localhost:3000/donuts',this.donutsData)
}


deleteCakes(id:number){
  return this.http.delete(`${'http://localhost:3000/cakes'}/${id}`)
}
deleteCookies(id:number){
  return this.http.delete(`${'http://localhost:3000/cookies'}/${id}`)
}
deleteCupcakes(id:number){
  return this.http.delete(`${'http://localhost:3000/cupcakes'}/${id}`)
}
deleteDonuts(id:number){
  return this.http.delete(`${'http://localhost:3000/donuts'}/${id}`)
}
}
