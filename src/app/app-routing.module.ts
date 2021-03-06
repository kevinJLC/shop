// tslint:disable-next-line: ordered-imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/Home/home/home.component';
import { NoAuthenticatedGuardService} from './servicios/no-authenticated-guard.service';
import { AuthenticatedGuardService} from './servicios/authenticated-guard.service';

const routes: Routes = [
  {path: '', component: InicioComponent},

  /*{path: 'cliente', component: HomeComponent, canActivate: [AuthenticatedGuardService],
  children: [{path: '', component: ClienteComponent }]},

  {path: 'administrador', component: HomeComponent, canActivate: [AuthenticatedGuardService],
  children: [{path: '', component: AdministradorComponent}]}
  */

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticatedGuardService, NoAuthenticatedGuardService]
})
export class AppRoutingModule { }
