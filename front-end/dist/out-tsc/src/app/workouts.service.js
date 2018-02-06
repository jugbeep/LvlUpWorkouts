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
var http_1 = require("@angular/common/http");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var WorkoutsService = /** @class */ (function () {
    function WorkoutsService(http) {
        this.http = http;
        this.workoutsUrl = 'api/workouts';
    }
    WorkoutsService.prototype.getWorkouts = function () {
        var _this = this;
        return this.http.get(this.workoutsUrl)
            .pipe(operators_1.tap(function (workouts) { return _this.log("got some workouts"); }), operators_1.catchError(this.handleError('getWorkouts', [])));
    };
    WorkoutsService.prototype.getWorkout = function (id) {
        var _this = this;
        var url = this.workoutsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("found workout id=" + id); }), operators_1.catchError(this.handleError("getWorkout id=" + id)));
    };
    // save(workout: Workout): Promise<Workout> {
    //   if (workout.id) {
    //     return this.put(workout);
    //   }
    //   return this.post(workout)
    // }
    WorkoutsService.prototype.updateWorkout = function (workout) {
        var _this = this;
        return this.http.put(this.workoutsUrl, workout, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("updated workout id=" + workout.id); }), operators_1.catchError(this.handleError('updateWorkout')));
    };
    WorkoutsService.prototype.addWorkout = function (workout) {
        var _this = this;
        return this.http.post(this.workoutsUrl, workout, httpOptions).pipe(operators_1.tap(function (workout) { return _this.log("added workout w/ id=" + workout.id); }), operators_1.catchError(this.handleError('addWorkout')));
    };
    WorkoutsService.prototype.deleteWorkout = function (workout) {
        var _this = this;
        var id = typeof workout === 'number' ? workout : workout.id;
        var url = this.workoutsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("delete workout id=" + id); }), operators_1.catchError(this.handleError('deleteWorkout')));
    };
    WorkoutsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return of_1.of(result);
        };
    };
    WorkoutsService.prototype.log = function (message) {
        console.log(message);
    };
    WorkoutsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WorkoutsService);
    return WorkoutsService;
}());
exports.WorkoutsService = WorkoutsService;
//# sourceMappingURL=workouts.service.js.map