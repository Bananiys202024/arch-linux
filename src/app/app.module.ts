import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lessons/lesson1/lesson1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopMenuComponent } from './fragments/top-menu/top-menu.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { Lesson3Component } from './lessons/lesson3/lesson3.component';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Lesson4Component } from './lessons/lesson4/lesson4.component';
import { Lesson5Component } from './lessons/lesson5/lesson5.component';
import { Lesson6Component } from './lessons/lesson6/lesson6.component';
import { Lesson7Component } from './lessons/lesson7/lesson7.component';
import { Lesson8Component } from './lessons/lesson8/lesson8.component';
import { Lesson9Component } from './lessons/lesson9/lesson9.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    WelcomeComponent,
    TopMenuComponent,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
