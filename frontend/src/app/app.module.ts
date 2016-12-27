import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormUploadComponent} from './form-upload/form-upload.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FormUploadComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
