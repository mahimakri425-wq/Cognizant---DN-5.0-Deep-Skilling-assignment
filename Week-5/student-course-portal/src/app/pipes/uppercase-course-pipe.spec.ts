import { UppercaseCoursePipe } from './uppercase-course-pipe';

describe('UppercaseCoursePipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseCoursePipe();
    expect(pipe).toBeTruthy();
  });
});
