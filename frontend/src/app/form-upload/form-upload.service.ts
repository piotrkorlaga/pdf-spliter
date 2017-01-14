import {Injectable} from "@angular/core";
import {Http, Headers, ResponseContentType} from "@angular/http";

@Injectable()
export class FormUploadService {
    url: string = "http://localhost:8080/upload";

    constructor(private http: Http) {
    }

    showSplittedPdf(data: ArrayBuffer) {
        var file = new Blob([new Uint8Array(data)], {type: 'application/pdf'});
        var url = window.URL.createObjectURL(file);
        window.open(url);
    }

    sendFile(files: File[], from: number, to: number) {
        let headers = new Headers();

        let formData: FormData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('from', from);
        formData.append('to', to);

        console.log(formData);


        this.http.post(this.url, formData, {
            headers: headers,
            responseType: ResponseContentType.ArrayBuffer
        }).subscribe(
            res => this.showSplittedPdf(res.arrayBuffer()),
            error => console.log(error)
        );
    }

}