import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path:'inbox',component:InboxComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
