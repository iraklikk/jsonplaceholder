import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {ActivatedRoute} from "@angular/router";
import {combineLatest} from "rxjs";
import {map, tap} from "rxjs/operators";
import {User} from "../entity/user";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // observable to get current user's posts
  posts$ = this.jsonService.getPosts(this.route.snapshot.params.id);
  // observable to get current user's name
  user$ = combineLatest([
    this.jsonService.getUsers(),
    this.route.params
  ]).pipe(
    map(([users, params]) =>
      users.find(user => user.id === +params.id) as User
    ),
    tap(res => console.log(res))
  );

  // using jsonService to get http requests, ActivatedRoute to get current user's id
  constructor(private jsonService: JsonplaceholderService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
