import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LogoutComponent } from './pages/logout/logout.component';

import { ConfirmExitGuard } from './guards/confirm-exit.guard';

import { HomeComponent } from './pages/home/home.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { CupcakesComponent } from './pages/cupcakes/cupcakes.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { CakesIdComponent } from './pages/cakes/cakes-id/cakes-id.component';
import { CookiesIdComponent } from './pages/cookies/cookies-id/cookies-id.component';
import { CupcakesIdComponent } from './pages/cupcakes/cupcakes-id/cupcakes-id.component';
import { DonutsIdComponent } from './pages/donuts/donuts-id/donuts-id.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cakes', component: CakesComponent },
  { path: 'cakes/:id', component: CakesIdComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'cookies/:id', component: CookiesIdComponent },
  { path: 'cupcakes', component: CupcakesComponent },
  { path: 'cupcakes/:id', component: CupcakesIdComponent },
  { path: 'donuts', component: DonutsComponent },
  { path: 'donuts/:id', component: DonutsIdComponent },
  { path: 'gestion', component: GestionComponent, canDeactivate: [ConfirmExitGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registrar', component: RegistrarComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
