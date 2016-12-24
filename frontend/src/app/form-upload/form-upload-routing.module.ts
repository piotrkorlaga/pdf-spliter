import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormUploadComponent }     from './form-upload.component';

const formUploadRoutes: Routes = [
  {
    path: '',
    component: FormUploadComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formUploadRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class FormUploadRoutingModule { }
