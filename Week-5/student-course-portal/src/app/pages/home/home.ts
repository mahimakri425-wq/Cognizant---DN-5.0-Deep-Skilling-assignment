import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

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

  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.updateCourseCount();
  }

  updateCourseCount(): void {
    this.courseCount = this.courseService.getCourses().length;
  }
}