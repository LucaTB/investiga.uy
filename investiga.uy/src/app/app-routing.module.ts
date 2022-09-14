import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComisionesComponent } from './pages/comisiones/comisiones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { HityaccComponent } from './pages/hityacc/hityacc.component';
import { SocComponent } from './pages/soc/soc.component';
import { NotdeprenComponent } from './pages/notdepren/notdepren.component';
import { AbtusComponent } from './pages/abtus/abtus.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'abtus',
    component: AbtusComponent,
  },
  {
    path: 'comisiones',
    component: ComisionesComponent,
  },
  {
    path: 'documentos',
    component: DocumentosComponent,
  },
  {
    path: 'hityacc',
    component: HityaccComponent,
  },
  {
    path: 'soc',
    component: SocComponent,
  },
  {
    path: 'notdepren',
    component: NotdeprenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
