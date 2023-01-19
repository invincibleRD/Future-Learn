import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { InboxComponent } from './inbox/inbox.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinnowComponent,
    NotificationsComponent,
    InboxComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
