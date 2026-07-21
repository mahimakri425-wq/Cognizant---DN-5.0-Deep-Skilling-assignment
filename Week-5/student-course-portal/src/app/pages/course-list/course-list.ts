import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard,
    Highlight
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = signal(true);

  selectedCourseId: number | null = null;

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true,
      instructor: 'Amit Sharma',
      fee: 5000,
      startDate: new Date('2026-08-01')
    },
    {
      id: 2,
      name: 'ASP.NET Core',
      code: 'NET202',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false,
      instructor: 'Priya Singh',
      fee: 6500,
      startDate: new Date('2026-08-10')
    },
    {
      id: 3,
      name: 'SQL Server',
      code: 'SQL303',
      credits: 2,
      gradeStatus: 'failed',
      enrolled: false,
      instructor: 'Rahul Verma',
      fee: 4000,
      startDate: new Date('2026-08-15')
    },
    {
      id: 4,
      name: 'C Sharp',
      code: 'CS404',
      credits: 1,
      gradeStatus: 'passed',
      enrolled: true,
      instructor: 'Neha Gupta',
      fee: 5500,
      startDate: new Date('2026-08-20')
    },
    {
      id: 5,
      name: 'Web API',
      code: 'API505',
      credits: 0,
      gradeStatus: 'pending',
      enrolled: false,
      instructor: 'Vikas Kumar',
      fee: 7000,
      startDate: new Date('2026-08-25')
    }
  ];

ngOnInit(): void {
  console.log('CourseList started');

  setTimeout(() => {
    console.log('Loading finished');
    this.isLoading.set(false);
  }, 1500);
}
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    console.log('Enrolling in course:', courseId);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}