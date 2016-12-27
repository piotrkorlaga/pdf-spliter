import {Component} from '@angular/core';
import {FormUploadModel} from './form-upload.model';

@Component({
    selector: 'form-upload',
    templateUrl: './form-upload.component.html'
    // styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent {
    model = new FormUploadModel();
}
