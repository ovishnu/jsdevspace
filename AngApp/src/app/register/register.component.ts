import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../service/user.service'
import { HttpClient } from '@angular/common/http';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  public users: User[]


  msg: String;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('REGISTRATION FAILURE!! :-(\n\n');
      return;
    }

    this.userService.register(this.registerForm.value)
      .subscribe(data => {
        console.log(data["affectedRows"]);
        if (data["affectedRows"] == 0) {
          alert('REGISTRATION FAILURE!! :-(\n\n');
          this.router.navigate(['register']);
        //  return;
        } else {
          this.router.navigate(['']);
          alert('REGISTRATION SUCCESS!! :-)\n\n');
        }
      });
  }
}













