import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {

  studentName = 'Mahima Kumari';

  enrolledCourses: Course[] = [];

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.enrollmentService
      .getEnrolledCourses()
      .subscribe({
        next: courses => {
          this.enrolledCourses = courses;
        },
        error: error => {
          console.error(
            'Unable to load enrolled courses:',
            error
          );
        }
      });
  }
}