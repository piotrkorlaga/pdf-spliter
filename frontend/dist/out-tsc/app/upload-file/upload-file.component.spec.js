import { async, TestBed } from '@angular/core/testing';
import { UploadFileComponent } from './upload-file.component';
describe('UploadFileComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UploadFileComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UploadFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/piotrkorlaga/Development/Source/sandbox/pdf-spliter/pdf-spliter/frontend/src/app/upload-file/upload-file.component.spec.js.map