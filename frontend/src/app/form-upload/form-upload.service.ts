import {Injectable}     from '@angular/core';
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {PdfSpliter} from "./pdf-spliter";
import {Observable}     from 'rxjs';

@Injectable()
export class FormUploadService {
    url: string = "http://localhost:8080/upload";

    constructor(private http: Http) {
    }

    sendFile(file: string, from: number, to: number): Observable<PdfSpliter> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let json = {
            file: file,
            from: from,
            to: to
        };

        return this.http.post(this.url, json, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}