import {Component} from '@angular/core';
import {FormUploadModel} from './form-upload.model';
import {FormUploadService} from "./form-upload.service";

@Component({
    selector: 'form-upload',
    templateUrl: './form-upload.component.html'
    // styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent {
    model = new FormUploadModel();

    constructor(private formUploadService: FormUploadService) {

    }

    splitFile() {
        this.formUploadService.sendFile(this.model.file, this.model.options.from, this.model.options.to)
            .subscribe(
                hero => console.log(hero),
                error => console.log(error)
            );
    }
}

