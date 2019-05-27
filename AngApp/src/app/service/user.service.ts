import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {


  private baseUrl = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl + 'members')
  }

  register(user: User) {
      return this.http.post(this.baseUrl + 'users', user)
  }

  login(user: User) {
    // console.log("i m inside login method of userservice");
    // console.log(user);
    // console.info("i m exiting login method of userservice");
    const authURL = this.baseUrl + 'authenticate';
    return this.http.post(authURL, user);

  }

  getUserByEmail(email: String): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'usersByEmail/' + email);
  }

  getUserByContact(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'users/' + user.id, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
}

