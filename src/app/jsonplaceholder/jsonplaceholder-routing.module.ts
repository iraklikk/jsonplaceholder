import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'users',
    pathMatch: "full",
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'posts/:id',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonplaceholderRoutingModule {}
