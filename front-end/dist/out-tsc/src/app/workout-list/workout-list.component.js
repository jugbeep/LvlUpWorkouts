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
var workouts_service_1 = require("../workouts.service");
var WorkoutListComponent = /** @class */ (function () {
    function WorkoutListComponent(router, workoutService) {
        this.router = router;
        this.workoutService = workoutService;
        this.workouts = [];
    }
    WorkoutListComponent.prototype.ngOnInit = function () {
        this.workoutService.getWorkouts();
        // .then(workouts => this.workouts = workouts.slice(1, 5));
    };
    WorkoutListComponent.prototype.gotoDetail = function (workout) {
        var link = ['/detail', workout.id];
        this.router.navigate(link);
    };
    WorkoutListComponent = __decorate([
        core_1.Component({
            selector: 'app-workout-list',
            templateUrl: './workout-list.component.html',
            styleUrls: ['./workout-list.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            workouts_service_1.WorkoutsService])
    ], WorkoutListComponent);
    return WorkoutListComponent;
}());
exports.WorkoutListComponent = WorkoutListComponent;
//# sourceMappingURL=workout-list.component.js.map