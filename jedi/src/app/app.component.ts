import { Component } from '@angular/core';
import {Student} from './student/student.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {

students: Student[]= [
{name: 'Luke', isJedi: true, temple: 'Coruscant'},
{name: 'leia', isJedi: false},
{name: 'carlos', isJedi: false}

]
}
