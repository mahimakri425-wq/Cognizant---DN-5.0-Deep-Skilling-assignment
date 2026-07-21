import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  studentName = 'Mahima Kumari';
  department = 'ECE';
  cgpa = 8.5;
  isEnrolled = true;
  courseName = '';

  ngOnInit(): void {
    console.log('Home Component Loaded Successfully!');
  }

  showMessage() {
    alert('Welcome to Student Course Portal!');
  }
}
