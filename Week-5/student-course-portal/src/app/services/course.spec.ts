import { HttpClient } from '@angular/common/http';
import {
  of,
  throwError
} from 'rxjs';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;

  let httpMock: {
    get: ReturnType<typeof vi.fn>;
    post: ReturnType<typeof vi.fn>;
    put: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };

  const mockCourses: Course[] = [
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
    }
  ];

  beforeEach(() => {
    httpMock = {
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn()
    };

    service = new CourseService(
      httpMock as unknown as HttpClient
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load courses using GET', () => {
    httpMock.get.mockReturnValue(
      of(mockCourses)
    );

    service.getCourses().subscribe(courses => {
      expect(courses).toEqual(mockCourses);
      expect(courses.length).toBe(2);
    });

    expect(httpMock.get).toHaveBeenCalledWith(
      'http://localhost:3000/courses'
    );
  });

  it('should add a course using POST', () => {
    const newCourse: Omit<Course, 'id'> = {
      name: 'Testing',
      code: 'TEST101',
      credits: 3,
      gradeStatus: 'pending'
    };

    const savedCourse: Course = {
      id: 3,
      ...newCourse
    };

    httpMock.post.mockReturnValue(
      of(savedCourse)
    );

    service.addCourse(newCourse).subscribe(course => {
      expect(course).toEqual(savedCourse);
    });

    expect(httpMock.post).toHaveBeenCalledWith(
      'http://localhost:3000/courses',
      newCourse
    );
  });

  it('should delete a course using DELETE', () => {
    httpMock.delete.mockReturnValue(
      of({})
    );

    service.deleteCourse(1).subscribe();

    expect(httpMock.delete).toHaveBeenCalledWith(
      'http://localhost:3000/courses/1'
    );
  });

  it('should handle an HTTP error', () => {
    httpMock.get.mockReturnValue(
      throwError(
        () => new Error('Server error')
      )
    );

    service.getCourses().subscribe({
      next: () => {
        throw new Error(
          'Expected request to fail'
        );
      },

      error: (error: Error) => {
        expect(error.message).toContain(
          'Failed to load courses'
        );
      }
    });
  });
});