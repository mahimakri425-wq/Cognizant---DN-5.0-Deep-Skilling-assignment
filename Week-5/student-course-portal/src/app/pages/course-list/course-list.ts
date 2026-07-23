import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = signal(true);

  courses: Course[] = [];
  filteredCourses: Course[] = [];

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') ?? '';

    this.filterCourses();

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }

  searchCourses(): void {
    this.router.navigate(
      ['/courses'],
      {
        queryParams: {
          search: this.searchTerm || null
        }
      }
    );

    this.filterCourses();
  }

  filterCourses(): void {
    const value = this.searchTerm
      .trim()
      .toLowerCase();

    if (!value) {
      this.filteredCourses = this.courses;
      return;
    }

    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(value) ||
      course.code.toLowerCase().includes(value)
    );
  }

  openCourse(courseId: number): void {
    this.router.navigate(
      ['/courses', courseId]
    );
  }
}