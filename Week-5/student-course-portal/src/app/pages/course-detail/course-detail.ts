import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import {
  EnrollmentService,
  Student
} from '../../services/enrollment';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course: Course | undefined;
  students: Student[] = [];

  courseId = 0;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),

      switchMap(courseId => {
        this.courseId = courseId;

        return this.courseService
          .getCourseById(courseId);
      }),

      switchMap(course => {
        this.course = course;

        return this.enrollmentService
          .getStudentsByCourse(this.courseId);
      })
    ).subscribe({
      next: (students: Student[]) => {
        this.students = students;
        this.isLoading = false;

        console.log(
          'Students for selected course:',
          students
        );
      },

      error: error => {
        console.error(
          'Unable to load course details:',
          error
        );

        this.errorMessage =
          'Unable to load the course details.';

        this.isLoading = false;
      }
    });
  }
}