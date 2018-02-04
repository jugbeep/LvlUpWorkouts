import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'; //added for first page seen
import { HomeComponent } from './homepage/homepage.component';
import { AboutComponent} from './about/about.component';



import { WorkoutStatisticsComponent} from './workout-statistics/workout-statistics.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailComponent } from './auth/email/email.component';
import { MonsterComponent } from './monster/monster.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SplashComponent}, //changed to splash landing called home in route
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'start', component: HomeComponent }, //changed from home to start for second route hit
  { path: 'monster', component: MonsterComponent},
  { path: 'workouts', component: WorkoutsComponent },
  { path: '*', component: PageNotFoundComponent },
  { path: 'about', component: AboutComponent},
  { path: 'stats', component: WorkoutStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

