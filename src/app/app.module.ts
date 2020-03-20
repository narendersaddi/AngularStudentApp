import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentRecardsComponent } from './student-recards/student-recards.component';
import { EventsComponent } from './events/events.component';
import { AppreciationsComponent } from './appreciations/appreciations.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    StudentInfoComponent,
    StudentRecardsComponent,
    EventsComponent,
    AppreciationsComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
