import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'React',
      code: 'RCT102',
      credits: 3
    },
    {
      id: 3,
      name: 'Node.js',
      code: 'NOD103',
      credits: 4
    },
    {
      id: 4,
      name: 'C# Programming',
      code: 'CSP104',
      credits: 3
    },
    {
      id: 5,
      name: 'SQL Database',
      code: 'SQL105',
      credits: 2
    }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}