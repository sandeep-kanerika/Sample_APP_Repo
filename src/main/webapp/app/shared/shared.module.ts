import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { TestappSharedLibsModule, TestappSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [TestappSharedLibsModule, TestappSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [TestappSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestappSharedModule {
    static forRoot() {
        return {
            ngModule: TestappSharedModule
        };
    }
}
