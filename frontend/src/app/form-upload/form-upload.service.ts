import {Injectable}     from '@angular/core';
import {Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable}     from 'rxjs';
import {PdfSpliter}     from "./pdf-spliter";

@Injectable()
export class FormUploadService {
    url: string = "http://localhost:8080/upload";
    responseData: any;

    constructor(private http: Http) {
    }

    sendFile(files: File[], from: number, to: number) {
        let headers = new Headers();

        let formData: FormData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('from', from);
        formData.append('to', to);

        console.log(formData);

        return new Promise((resolve, reject) => {
            this.http.post(this.url, formData, {
                headers: headers
            }).subscribe(
                res => {
                    this.responseData = res.json();
                    resolve(this.responseData);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

}