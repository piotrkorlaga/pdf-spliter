import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import {AppComponent} from './app.component';
import {FormUploadComponent} from './form-upload/form-upload.component';
import {FormUploadService} from './form-upload/form-upload.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        FormUploadComponent
    ],
    providers: [FormUploadService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
