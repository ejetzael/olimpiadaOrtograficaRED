import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// asi jalamos todo lo de materialA
import { MaterialModule } from './material.module';


import { ConvocComponent } from './pages/convoc/convoc.component';
import { HomeComponent } from './pages/home/home.component';
import { GranfinalComponent } from './pages/granfinal/granfinal.component';
import { SemifinalComponent } from './pages/semifinal/semifinal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DialogLoginComponent } from './shared/dialog-login/dialog-login.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { RecalendarizacionComponent } from './shared/recalendarizacion/recalendarizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    ConvocComponent,
    HomeComponent,
    GranfinalComponent,
    SemifinalComponent,
    FooterComponent,
    DialogLoginComponent,
    ProtegidaComponent,
    CallbackComponent,
    RecalendarizacionComponent
  ],
  entryComponents: [
    DialogLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
