import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { Store } from '@ngrx/store';
import {
  combineLatest,
  map,
  Observable
} from 'rxjs';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import {
  loadCourses
} from '../../store/course/course.actions';

import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$: Observable<Course[]>;
  filteredCourses$: Observable<Course[]>;

  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  searchTerm = '';

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ =
      this.store.select(selectAllCourses);

    this.loading$ =
      this.store.select(selectCoursesLoading);

    this.error$ =
      this.store.select(selectCoursesError);

    this.filteredCourses$ = combineLatest([
      this.courses$,
      this.route.queryParamMap
    ]).pipe(
      map(([courses, params]) => {
        const search =
          params.get('search')?.trim().toLowerCase() ?? '';

        this.searchTerm = params.get('search') ?? '';

        if (!search) {
          return courses;
        }

        return courses.filter(course =>
          course.name.toLowerCase().includes(search) ||
          course.code.toLowerCase().includes(search)
        );
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
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
  }

  openCourse(courseId: string | number): void {
    this.router.navigate(
      ['/courses', courseId]
    );
  }
}