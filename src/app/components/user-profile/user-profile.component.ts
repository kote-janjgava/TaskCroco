import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @Input() name: string | undefined;
  randomImageUrl: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/').subscribe((data) => {
      const user = data.results[0];
      this.randomImageUrl = user.picture.large;
    });
  }
}
