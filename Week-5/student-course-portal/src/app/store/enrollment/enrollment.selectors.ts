import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  EnrollmentState
} from './enrollment.reducer';

import {
  selectAllCourses
} from '../course/course.selectors';

export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>(
    'enrollment'
  );

export const selectEnrolledCourseIds =
  createSelector(
    selectEnrollmentState,
    state => state.enrolledCourseIds
  );

export const selectEnrollmentCount =
  createSelector(
    selectEnrolledCourseIds,
    courseIds => courseIds.length
  );

export const selectEnrolledCourses =
  createSelector(
    selectAllCourses,
    selectEnrolledCourseIds,
    (courses, enrolledIds) =>
      courses.filter(course =>
        enrolledIds.includes(course.id)
      )
  );