"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var service_worker_1 = require("@angular/service-worker");
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
var environment_1 = require("../environments/environment");
var workouts_service_1 = require("./workouts.service");
var auth_service_1 = require("./auth.service");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var angularfire2_1 = require("angularfire2");
var auth_1 = require("angularfire2/auth");
var workout_statistics_component_1 = require("./workout-statistics/workout-statistics.component");
var login_component_1 = require("./auth/login/login.component");
var email_component_1 = require("./auth/email/email.component");
var signup_component_1 = require("./auth/signup/signup.component");
var auth_component_1 = require("./auth/auth.component");
var monster_component_1 = require("./monster/monster.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var workouts_component_1 = require("./workouts/workouts.component");
var workout_detail_component_1 = require("./workout-detail/workout-detail.component");
var splash_component_1 = require("./splash/splash.component");
var about_component_1 = require("./about/about.component");
var workout_list_component_1 = require("./workout-list/workout-list.component");
exports.firebaseConfig = {
    apiKey: "AIzaSyAIzdNMkeONS9GR-2Ib12rmgaj42qe7plI",
    authDomain: "login-angular-5.firebaseapp.com",
    databaseURL: "https://login-angular-5.firebaseio.com",
    projectId: "login-angular-5",
    storageBucket: "",
    messagingSenderId: "640818277665"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomeComponent,
                login_component_1.LoginComponent,
                email_component_1.EmailComponent,
                signup_component_1.SignupComponent,
                auth_component_1.AuthComponent,
                monster_component_1.MonsterComponent,
                page_not_found_component_1.PageNotFoundComponent,
                workout_statistics_component_1.WorkoutStatisticsComponent,
                auth_component_1.AuthComponent,
                monster_component_1.MonsterComponent,
                workouts_component_1.WorkoutsComponent,
                workout_detail_component_1.WorkoutDetailComponent,
                splash_component_1.SplashComponent,
                about_component_1.AboutComponent,
                workout_list_component_1.WorkoutListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                forms_2.FormsModule,
                forms_1.ReactiveFormsModule,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
                auth_1.AngularFireAuthModule,
                //InMemoryWebApiModule.forRoot(WorkoutDataService, { dataEncapsulation: false }),
                service_worker_1.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment_1.environment.production })
            ],
            providers: [auth_service_1.AuthService, workouts_service_1.WorkoutsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map