import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthService } from './auth.service';

import { environment } from '../environments/environment';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorkoutsService } from './workouts.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/homepage.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { WorkoutStatisticsComponent } from './workout-statistics/workout-statistics.component';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { MonsterComponent } from './monster/monster.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';



export const firebaseConfig = {
  apiKey: "AIzaSyAIzdNMkeONS9GR-2Ib12rmgaj42qe7plI",
  authDomain: "login-angular-5.firebaseapp.com",
  databaseURL: "https://login-angular-5.firebaseio.com",
  projectId: "login-angular-5",
  storageBucket: "",
  messagingSenderId: "640818277665"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    AuthComponent,
    MonsterComponent,
    PageNotFoundComponent,
    WorkoutStatisticsComponent,
    AuthComponent,
    MonsterComponent,
    PageNotFoundComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
    SplashComponent,
    AboutComponent,
    WorkoutListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    // InMemoryWebApiModule.forRoot(workoutService, {delay: 600}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [ AuthService, WorkoutsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
