// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

// Custom Components and services
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WorkoutComponent } from './workout/workout.component';
import { CurrentWorkoutComponent } from './workout/current-workout/current-workout.component';
import { NewWorkoutComponent } from './workout/new-workout/new-workout.component';
import { PastWorkoutComponent } from './workout/past-workout/past-workout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopWorkoutComponent } from './workout/current-workout/stop-workout.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WorkoutComponent,
    CurrentWorkoutComponent,
    NewWorkoutComponent,
    PastWorkoutComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopWorkoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopWorkoutComponent]
})
export class AppModule { }
