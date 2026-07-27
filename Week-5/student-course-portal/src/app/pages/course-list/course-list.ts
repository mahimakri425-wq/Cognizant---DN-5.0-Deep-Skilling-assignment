import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];
  filteredCourses: Course[] = [];

  searchText = '';
  isLoading = false;
  errorMessage = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.courseService.getCourses().subscribe({
      next: (courses: Course[]) => {
        this.courses = courses;
        this.filteredCourses = courses;
        this.isLoading = false;
      },

      error: (error: Error) => {
        console.error('Unable to load courses:', error);

        this.errorMessage =
          error.message || 'Failed to load courses. Please try again.';

        this.isLoading = false;
      }
    });
  }

  searchCourses(): void {
    const searchValue = this.searchText.trim().toLowerCase();

    if (!searchValue) {
      this.filteredCourses = this.courses;
      return;
    }

    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(searchValue) ||
      course.code.toLowerCase().includes(searchValue)
    );
  }
}