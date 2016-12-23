import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { FormUploadComponent }     from './form-upload.component';
import { FormUploadRoutingModule } from './form-upload-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormUploadRoutingModule,
  ],
  declarations: [
    FormUploadComponent
  ],
  providers: [

  ]
})
export class FormUploadModule {}
