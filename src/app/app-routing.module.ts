import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConvocComponent } from './pages/convoc/convoc.component';
import { SemifinalComponent } from './pages/semifinal/semifinal.component';
import { GranfinalComponent } from './pages/granfinal/granfinal.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'convocatoria', component: ConvocComponent },
  { path: 'semifinales', component: SemifinalComponent },
  { path: 'finalistas', component: GranfinalComponent },
  { path: 'evaluacion', 
    component: ProtegidaComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch : 'full', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
