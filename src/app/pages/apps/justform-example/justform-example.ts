import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './justform-example.html',
})
export class JustformExample {
  private fb = new FormBuilder();

  submittedValue = signal<typeof this.userForm.value | null>(null);

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.required, Validators.min(18)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.submittedValue.set(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  
}
