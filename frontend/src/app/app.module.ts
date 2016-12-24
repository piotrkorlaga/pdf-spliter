import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
