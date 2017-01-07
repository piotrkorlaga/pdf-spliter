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

    constructor(private formUploadService: FormUploadService) {

    }

    onChange(event) {
        var files = event.srcElement.files;
        console.log(files);
        this.model.file = files[0];
    }

    splitFile() {
        this.formUploadService.sendFile(this.model.file, this.model.options.from, this.model.options.to)
            .subscribe(
                hero => console.log(hero),
                error => console.log(error)
            );
    }
}

