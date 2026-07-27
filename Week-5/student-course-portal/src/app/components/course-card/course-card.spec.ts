import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';

import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture =
      TestBed.createComponent(CourseCard);

    component = fixture.componentInstance;
    component.course = mockCourse;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course name', () => {
    const element =
      fixture.nativeElement as HTMLElement;

    expect(element.textContent)
      .toContain('Data Structures');
  });

  it('should display the course code', () => {
    const element =
      fixture.nativeElement as HTMLElement;

    expect(element.textContent)
      .toContain('CS101');
  });

  it('should dispatch enroll action', () => {
    const dispatchSpy =
      vi.spyOn(store, 'dispatch');

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    button.click();

    expect(dispatchSpy).toHaveBeenCalledWith(
      enrollInCourse({ courseId: 1 })
    );
  });

  it('should dispatch unenroll action', () => {
    store.setState({
      enrollment: {
        enrolledCourseIds: [1]
      }
    });

    fixture.detectChanges();

    const dispatchSpy =
      vi.spyOn(store, 'dispatch');

    component.toggleEnrollment();

    expect(dispatchSpy).toHaveBeenCalledWith(
      unenrollFromCourse({ courseId: 1 })
    );
  });
});
