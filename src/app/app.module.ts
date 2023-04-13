import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule }from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { CupcakesComponent } from './pages/cupcakes/cupcakes.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CakesIdComponent } from './pages/cakes/cakes-id/cakes-id.component';
import { CookiesIdComponent } from './pages/cookies/cookies-id/cookies-id.component';
import { CupcakesIdComponent } from './pages/cupcakes/cupcakes-id/cupcakes-id.component';
import { DonutsIdComponent } from './pages/donuts/donuts-id/donuts-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDonutsComponent } from './pages/donuts/new-donuts/new-donuts.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CakesComponent,
    CookiesComponent,
    CupcakesComponent,
    DonutsComponent,
    GestionComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    PerfilComponent,
    RegistrarComponent,
    CakesIdComponent,
    CookiesIdComponent,
    CupcakesIdComponent,
    DonutsIdComponent,
    NewDonutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
