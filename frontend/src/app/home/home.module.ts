import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { HomeComponent }    from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import { FormUploadComponent } from '../form-upload/form-upload.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    FormUploadComponent
  ],
  providers: []
})
export class HomeModule {}
