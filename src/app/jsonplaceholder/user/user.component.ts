import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {ActivatedRoute} from "@angular/router";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../entity/user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 // observable to get current user's info using ActivatedRouts params to get user's id
 // using combineLatest to map all users into the user whose id is same as route's params id
  user$ = combineLatest([
    this.jsonService.getUsers(),
    this.route.params
  ]).pipe(
    map(([users, params]) =>
      users.find(user => user.id === +params.id) as User
    )
  );


  // using jsonService to get http requests, ActivatedRoute to get current user's id
  constructor(private jsonService: JsonplaceholderService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
