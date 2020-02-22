import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

// asi jalamos todo lo de materialA
import { MaterialModule } from './material.module';
import { ConvocComponent } from './pages/convoc/convoc.component';
import { HomeComponent } from './pages/home/home.component';
import { GranfinalComponent } from './pages/granfinal/granfinal.component';
import { SemifinalComponent } from './pages/semifinal/semifinal.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ConvocComponent,
    HomeComponent,
    GranfinalComponent,
    SemifinalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
