import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ComisionesComponent } from './pages/comisiones/comisiones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { HityaccComponent } from './pages/hityacc/hityacc.component';
import { NotdeprenComponent } from './pages/notdepren/notdepren.component';
import { AbtusComponent } from './pages/abtus/abtus.component';
import { DeclComponent } from './pages/decl/decl.component';
import { SocComponent } from './pages/soc/soc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ComisionesComponent,
    DocumentosComponent,
    HityaccComponent,
    NotdeprenComponent,
    AbtusComponent,
    DeclComponent,
    SocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
