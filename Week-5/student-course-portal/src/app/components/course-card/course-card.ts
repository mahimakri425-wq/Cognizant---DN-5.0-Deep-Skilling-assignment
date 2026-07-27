import {
  AsyncPipe,
  TitleCasePipe
} from '@angular/common';

import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';
import {
  map,
  Observable,
  take
} from 'rxjs';

import { Course } from '../../models/course.model';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledCourseIds
} from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    AsyncPipe,
    TitleCasePipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnInit {

  @Input({ required: true })
  course!: Course;

  isEnrolled$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isEnrolled$ = this.store
      .select(selectEnrolledCourseIds)
      .pipe(
        map(courseIds =>
          courseIds.includes(this.course.id)
        )
      );
  }

  toggleEnrollment(): void {
    this.store
      .select(selectEnrolledCourseIds)
      .pipe(take(1))
      .subscribe(courseIds => {
        const isEnrolled =
          courseIds.includes(this.course.id);

        if (isEnrolled) {
          this.store.dispatch(
            unenrollFromCourse({
              courseId: this.course.id
            })
          );
        } else {
          this.store.dispatch(
            enrollInCourse({
              courseId: this.course.id
            })
          );
        }
      });
  }
}