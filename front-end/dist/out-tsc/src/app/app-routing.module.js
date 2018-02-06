"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var workout_statistics_component_1 = require("./workout-statistics/workout-statistics.component");
var login_component_1 = require("./auth/login/login.component");
var signup_component_1 = require("./auth/signup/signup.component");
var email_component_1 = require("./auth/email/email.component");
var monster_component_1 = require("./monster/monster.component");
var workouts_component_1 = require("./workouts/workouts.component");
var about_component_1 = require("./about/about.component");
var splash_component_1 = require("./splash/splash.component"); //added for first page seen
var homepage_component_1 = require("./homepage/homepage.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var workout_detail_component_1 = require("./workout-detail/workout-detail.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: splash_component_1.SplashComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'email-login', component: email_component_1.EmailComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'start', component: homepage_component_1.HomeComponent },
    { path: 'monster', component: monster_component_1.MonsterComponent },
    { path: 'workouts', component: workouts_component_1.WorkoutsComponent },
    { path: 'detail/:id', component: workout_detail_component_1.WorkoutDetailComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'stats', component: workout_statistics_component_1.WorkoutStatisticsComponent },
    { path: '*', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map