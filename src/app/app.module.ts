import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserDetailInformationComponent } from './components/user-detail-information/user-detail-information.component';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageDescriptionComponent } from './components/page-description/page-description.component';
import { SlotsComponent } from './components/slots/slots.component';

@NgModule({
  declarations: [
    SlotsComponent,
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsComponent,
    PostCardComponent,
    UserProfileComponent,
    UserDetailInformationComponent,
    HeaderComponent,
    PageTitleComponent,
    PageDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
