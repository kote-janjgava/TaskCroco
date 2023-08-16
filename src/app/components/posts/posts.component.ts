import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

import { Post } from 'src/app/interface/Post';
import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  userId: string | null = null;
  postData: Post[] | undefined = undefined;
  userData: User | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.postService
        .getPosts()
        .subscribe(
          (posts) =>
            (this.postData = posts.filter((post) =>
              this.userId ? post.userId === parseInt(this.userId) : null
            ))
        );
      this.userService
        .getUserWithId(this.userId)
        .subscribe((user) => (this.userData = user));
    } else {
      this.postData = undefined;
      this.userData = undefined;
    }
  }
}
