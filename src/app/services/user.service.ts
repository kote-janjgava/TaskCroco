import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserWithId(userId: string | null): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${userId}`);
  }
}
