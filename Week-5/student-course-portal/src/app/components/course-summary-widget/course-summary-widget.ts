import { Component, EventEmitter, Output } from '@angular/core';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget {

  @Output()
  courseAdded = new EventEmitter<void>();

  constructor(private courseService: CourseService) {}

  get totalCourses(): number {
    return this.courseService.getCourses().length;
  }

  addCourse(): void {
    const newId = this.courseService.getCourses().length + 1;

    const newCourse: Course = {
      id: newId,
      name: `New Course ${newId}`,
      code: `NEW${newId}`,
      credits: 3,
      gradeStatus: 'pending'
    };

    this.courseService.addCourse(newCourse);

    this.courseAdded.emit();
  }
}