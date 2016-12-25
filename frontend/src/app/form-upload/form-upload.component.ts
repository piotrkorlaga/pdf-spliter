import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html'
  // styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent {
  formSplitter: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder){
    this.formSplitter = fb.group({
      //TODO: set validation for file
      file: '',
      options:fb.group({
        from: ['1', <any>Validators.required],
        to: ['2', <any>Validators.required],
      }),
    });
  }

}
