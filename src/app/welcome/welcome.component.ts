import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent{
 
  title = 'arch-linux';
  
  constructor(private router: Router) {}

  goLesson1() {this.router.navigate(['/lesson1']);}
  goLesson2() {this.router.navigate(['/lesson2']);}
  goLesson3() {this.router.navigate(['/lesson3']);}
  goLesson4() {this.router.navigate(['/lesson4']);}
  goLesson5() {this.router.navigate(['/lesson5']);}
  goLesson6() {this.router.navigate(['/lesson6']);}
  goLesson7() {this.router.navigate(['/lesson7']);}
  goLesson8() {this.router.navigate(['/lesson8']);}
  goLesson9() {this.router.navigate(['/lesson9']);}


}
