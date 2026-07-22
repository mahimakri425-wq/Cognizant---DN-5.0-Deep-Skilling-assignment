import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {
  const value = String(control.value ?? '').trim().toUpperCase();

  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}

export const simulateEmailCheck: AsyncValidatorFn = (
  control: AbstractControl
): Promise<ValidationErrors | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value ?? '').toLowerCase();

      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
};

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          simulateEmailCheck
        ]
      ),

      courseId: [
        '',
        [
          Validators.required,
          noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray<FormControl<string | null>> {
  return this.enrollForm.get('additionalCourses') as FormArray<
    FormControl<string | null>
  >;
}

  addCourse(): void {
  this.additionalCourses.push(
    new FormControl<string | null>(
      '',
      Validators.required
    )
  );
}
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    console.log('Form value:', this.enrollForm.value);

    console.log(
      'Raw form value:',
      this.enrollForm.getRawValue()
    );

    /*
      enrollForm.value excludes disabled controls.
      enrollForm.getRawValue() includes all controls,
      including disabled controls.
    */

    this.submitted = true;
  }

  resetForm(): void {
    this.enrollForm.reset({
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: 'Odd',
      agreeToTerms: false,
      additionalCourses: []
    });

    this.additionalCourses.clear();
    this.submitted = false;
  }
}