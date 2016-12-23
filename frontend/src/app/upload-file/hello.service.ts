import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PdfSpliter} from "./pdf-spliter";

@Injectable()
export class HelloService {
    url: "http://localhost:8080/hello"

    constructor(private http: Http) {}


    getGreetings() : Observable<PdfSpliter[]> {
        return this.http.get(this.url)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
}
