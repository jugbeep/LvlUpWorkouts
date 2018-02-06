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
var router_1 = require("@angular/router");
var workout_1 = require("../workouts/workout");
var workouts_service_1 = require("../workouts.service");
var common_1 = require("@angular/common");
var WorkoutDetailComponent = /** @class */ (function () {
    function WorkoutDetailComponent(workoutService, route, location) {
        this.workoutService = workoutService;
        this.route = route;
        this.location = location;
    }
    WorkoutDetailComponent.prototype.ngOnInit = function () {
        this.getWorkout();
    };
    WorkoutDetailComponent.prototype.getWorkout = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.workoutService.getWorkout(id)
            .subscribe(function (workout) { return _this.workout = workout; });
    };
    WorkoutDetailComponent.prototype.save = function () {
        var _this = this;
        this.workoutService.updateWorkout(this.workout)
            .subscribe(function () { return _this.goBack(); });
    };
    WorkoutDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", workout_1.Workout)
    ], WorkoutDetailComponent.prototype, "workout", void 0);
    WorkoutDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-workout-detail',
            templateUrl: './workout-detail.component.html',
            styleUrls: ['./workout-detail.component.scss']
        }),
        __metadata("design:paramtypes", [workouts_service_1.WorkoutsService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], WorkoutDetailComponent);
    return WorkoutDetailComponent;
}());
exports.WorkoutDetailComponent = WorkoutDetailComponent;
//# sourceMappingURL=workout-detail.component.js.map