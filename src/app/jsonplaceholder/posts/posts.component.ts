import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ = this.jsonService.getPosts(this.route.snapshot.params.id);

  constructor(private jsonService: JsonplaceholderService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
  }

}
