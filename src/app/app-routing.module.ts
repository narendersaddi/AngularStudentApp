import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormBuilder } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentRecardsComponent } from './student-recards/student-recards.component';
import { EventsComponent } from './events/events.component';
import { AppreciationsComponent } from './appreciations/appreciations.component';
import { ActionsComponent } from './actions/actions.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent ,
    children: [
      { path: 'studentInfo', component: StudentInfoComponent },
      { path: 'studentRecards', component: StudentRecardsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'appreciations', component: AppreciationsComponent },
      { path: 'actions', component: ActionsComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
