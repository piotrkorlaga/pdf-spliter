import { Component, OnInit } from '@angular/core';
import {HelloService} from "./hello.service";
import {PdfSpliter} from "./pdf-spliter";

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
