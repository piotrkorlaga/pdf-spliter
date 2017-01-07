import {Component} from "@angular/core";
import {FormUploadModel} from "./form-upload.model";
import {FormUploadService} from "./form-upload.service";

@Component({
    selector: 'form-upload',
    templateUrl: './form-upload.component.html',
    styles: ['.row {margin-top: 5%}']
})
export class FormUploadComponent {
    model = new FormUploadModel();
    fileName: string;
    files: any;

    constructor(private formUploadService: FormUploadService) {

    }

    onChange(event) {
        this.files = event.srcElement.files;
        this.fileName = this.files[0].name;
    }

    splitFile() {
        this.formUploadService.sendFile(this.files, this.model.from, this.model.to).then(result => {
            console.log(result);
        });
    }
}

