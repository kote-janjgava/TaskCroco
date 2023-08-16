import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
