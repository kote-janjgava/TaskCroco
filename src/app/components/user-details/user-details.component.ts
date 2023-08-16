import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userId: string | null = null;
  userData: User | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.userService
        .getUserWithId(this.userId)
        .subscribe((user) => (this.userData = user));
    } else {
      this.userData = undefined;
    }
  }
}
