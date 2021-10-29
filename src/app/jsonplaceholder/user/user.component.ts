import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatest} from "rxjs";
import {map, tap} from "rxjs/operators";
import {User} from "../entity/user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  user$ = combineLatest([
    this.jsonService.getUsers(),
    this.route.params
  ]).pipe(
    tap(res => console.log(res)),
    map(([users, params]) =>
      users.find(user => user.id === +params.id) as User
    ),
    tap(res => console.log(res)),
  );

  constructor(private jsonService: JsonplaceholderService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit(): void {
  }

  getPosts(id: number) {
    this.router.navigateByUrl(`posts/${id}`);
  }

}
