import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lesson1Component } from './lessons/lesson1/lesson1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { Lesson3Component } from './lessons/lesson3/lesson3.component';
import { Lesson4Component } from './lessons/lesson4/lesson4.component';
import { Lesson5Component } from './lessons/lesson5/lesson5.component';
import { Lesson6Component } from './lessons/lesson6/lesson6.component';
import { Lesson7Component } from './lessons/lesson7/lesson7.component';
import { Lesson8Component } from './lessons/lesson8/lesson8.component';
import { Lesson9Component } from './lessons/lesson9/lesson9.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'lesson1',
        component: Lesson1Component,
    },
    {
        path: 'lesson2',
        component: Lesson2Component,
    },
    {
        path: 'lesson3',
        component: Lesson3Component,
    },
    {
        path: 'lesson4',
        component: Lesson4Component,
    },
    {
        path: 'lesson5',
        component: Lesson5Component,
    },
    {
        path: 'lesson6',
        component: Lesson6Component,
    },
    {
        path: 'lesson7',
        component: Lesson7Component,
    },
    {
        path: 'lesson8',
        component: Lesson8Component,
    },
    {
        path: 'lesson9',
        component: Lesson9Component,
    },

    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }