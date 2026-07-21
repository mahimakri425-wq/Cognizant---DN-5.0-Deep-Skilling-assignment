import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseCourse',
  standalone: true
})
export class UppercaseCoursePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
