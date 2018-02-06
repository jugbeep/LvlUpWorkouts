"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var workouts_service_1 = require("./workouts.service");
describe('WorkoutsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [workouts_service_1.WorkoutsService]
        });
    });
    it('should be created', testing_1.inject([workouts_service_1.WorkoutsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=workouts.service.spec.js.map