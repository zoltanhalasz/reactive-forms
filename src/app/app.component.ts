import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // Initialize the form with two fields
    this.myForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9]*$') // Alphanumeric pattern
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9]*$') // Alphanumeric pattern
      ]],
      email: ['', [
        Validators.required,
        Validators.email // Email validator
      ]]

    });
    console.log(this.myForm.get('firstName'));
    console.log(this.myForm);

    this.myForm.get('firstName')?.valueChanges.pipe(debounceTime(500)).subscribe(console.log)
    this.myForm.disable();
    // this.myForm.statusChanges.pipe(debounceTime(500)).subscribe(status=> console.log(status));
    // this.myForm.valueChanges.pipe(debounceTime(500)).subscribe(status=> console.log(status))
  }
  // Submit handler
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
      console.log('First Name:', this.myForm.value.firstName);
      console.log('Last Name:', this.myForm.value.lastName);
      console.log('Email:', this.myForm.value.email);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
