import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {JsonplaceholderRoutingModule} from "./jsonplaceholder-routing.module";
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    JsonplaceholderRoutingModule
  ]
})
export class JsonplaceholderModule { }
