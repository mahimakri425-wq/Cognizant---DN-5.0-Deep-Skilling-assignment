import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 12;

  // Property binding is one-way:
  // component data moves from the component to the DOM.

  // ngModel is two-way:
  // data moves between the component and the input field.

  ngOnInit(): void {
    this.availableCourses = 12;

    console.log(
      'HomeComponent initialised — courses loaded'
    );
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}