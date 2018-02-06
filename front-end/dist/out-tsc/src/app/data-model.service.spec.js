"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_model_service_1 = require("./data-model.service");
describe('DataModelService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [data_model_service_1.DataModelService]
        });
    });
    it('should be created', testing_1.inject([data_model_service_1.DataModelService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data-model.service.spec.js.map