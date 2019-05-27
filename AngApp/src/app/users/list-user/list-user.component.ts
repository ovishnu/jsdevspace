import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'app/model/user.model';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'mdb-app-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

  editUser(user: User): void {
    localStorage.removeItem('edituserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['/users/edit-user']);
  };
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
    this.router.navigate(['/users/list-user']);
  };
  addUser(): void {
    this.router.navigate(['/users/list-user']);
  };
}
