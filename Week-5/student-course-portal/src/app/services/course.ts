import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular Development',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'ASP.NET Core',
      code: 'NET201',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'DB301',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Cloud Computing',
      code: 'CC401',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 5,
      name: 'Software Testing',
      code: 'ST501',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}