import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  @ViewChild('formContent') reportContent: ElementRef | undefined;

  constructor(private formBuilder: FormBuilder) {


  }


  createForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  ngOnInit() {
    this.createForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


  onSubmit() {
    var obj = Object.assign({}, this.form.value);
   
    Object.keys(obj).forEach(key => obj[key] == undefined || obj[key] == '' ? delete obj[key] : '');
    console.log(obj)
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    
    alert(this.form.value.firstName)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))
  }
}
