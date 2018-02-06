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
var auth_1 = require("angularfire2/auth");
var firebase = require("firebase/app");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, http) {
        this.afAuth = afAuth;
        this.router = router;
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, log in works!');
            _this.router.navigateByUrl('/workouts');
        })
            .catch(function (err) {
            console.log('something went wrong: ', err.message);
            alert('Try again');
        });
    };
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success', value);
            _this.router.navigateByUrl('/workouts');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
            alert('Try again');
        });
    };
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (value) {
            console.log('Success', value),
                _this.router.navigateByUrl('/workouts');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
            alert('Try again');
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth,
            router_1.Router,
            http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map