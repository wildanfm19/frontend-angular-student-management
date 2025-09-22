import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student/student";

@Component({
  selector: 'app-root',
  imports: [StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
