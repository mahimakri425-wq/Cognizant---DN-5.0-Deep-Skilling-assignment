import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  signal
} from '@angular/core';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  @Output() courseAdded = new EventEmitter<void>();

  totalCourses = signal(0);

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourseCount();
  }

  loadCourseCount(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        console.log('Widget courses:', courses);
        this.totalCourses.set(courses.length);
      },
      error: (error) => {
        console.error('Widget count error:', error);
        this.totalCourses.set(0);
      }
    });
  }

  addCourse(): void {
    const courseNumber = this.totalCourses() + 1;

    const newCourse: Omit<Course, 'id'> = {
      name: `New Course ${courseNumber}`,
      code: `NEW${courseNumber}`,
      credits: 3,
      gradeStatus: 'pending'
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: () => {
        this.loadCourseCount();
        this.courseAdded.emit();
      },
      error: (error) => {
        console.error('Add course error:', error);
      }
    });
  }
}