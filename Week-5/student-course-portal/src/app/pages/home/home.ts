import { Component, OnInit, signal } from '@angular/core';

import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  courseCount = signal(0);

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourseCount();
  }

  loadCourseCount(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        console.log('Home courses:', courses);
        this.courseCount.set(courses.length);
      },
      error: (error) => {
        console.error('Home count error:', error);
        this.courseCount.set(0);
      }
    });
  }
}