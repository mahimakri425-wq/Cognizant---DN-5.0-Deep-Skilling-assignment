import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Course } from '../models/course.model';
import { CourseService } from './course';

export interface Student {
  id: number;
  name: string;
  email: string;
  courseId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private readonly studentsUrl =
    'http://localhost:3000/students';

  private enrolledCourseIds: number[] = [];

  constructor(
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService.getCourses().pipe(
      map(courses =>
        courses.filter(course =>
          this.enrolledCourseIds.includes(course.id)
        )
      )
    );
  }

  getStudentsByCourse(
    courseId: number
  ): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.studentsUrl}?courseId=${courseId}`
    );
  }
}