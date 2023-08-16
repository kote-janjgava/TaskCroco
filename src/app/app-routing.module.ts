import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { SlotsComponent } from './components/slots/slots.component';
const routes: Routes = [
  { path: '', component: UsersComponent },
  //
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'slot', component: SlotsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
