"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var workouts_service_1 = require("../workouts.service");
var WorkoutsComponent = /** @class */ (function () {
    function WorkoutsComponent(workoutsService) {
        this.workoutsService = workoutsService;
    }
    WorkoutsComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    WorkoutsComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutsService.getWorkouts()
            .subscribe(function (workouts) { return _this.workouts = workouts; });
    };
    WorkoutsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.workoutsService.addWorkout({ name: name })
            .subscribe(function (workout) {
            _this.workouts.push(workout);
        });
    };
    WorkoutsComponent.prototype.delete = function (workout) {
        this.workouts = this.workouts.filter(function (w) { return w !== workout; });
        this.workoutsService.deleteWorkout(workout).subscribe();
    };
    WorkoutsComponent = __decorate([
        core_1.Component({
            selector: 'app-workouts',
            templateUrl: './workouts.component.html',
            styleUrls: ['./workouts.component.scss']
        }),
        __metadata("design:paramtypes", [workouts_service_1.WorkoutsService])
    ], WorkoutsComponent);
    return WorkoutsComponent;
}());
exports.WorkoutsComponent = WorkoutsComponent;
//# sourceMappingURL=workouts.component.js.map