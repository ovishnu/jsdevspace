import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { first } from 'rxjs/operators';
import { User } from '../../model/user.model';

@Component({
  selector: 'mdb-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  User: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    const id = localStorage.getItem('editUserId');
    if (!id) {
      alert('Invalid action.')
      this.router.navigate(['users/list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      fullName: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.userService.getUserById(+id)
      .subscribe( data => {
        this.editForm.setValue(data[0]);
     });
  }
  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/users/list-user']);
        },
        error => {
          alert(error);
        });
  }
}


