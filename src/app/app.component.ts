import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // Initialize the form with two fields
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
  // Submit handler
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
      console.log('First Name:', this.myForm.value.firstName);
      console.log('Last Name:', this.myForm.value.lastName);
    }
  }
}
