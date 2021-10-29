import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.jsonService.getUsers();

  constructor(private jsonService: JsonplaceholderService,
              private router: Router) { }

  ngOnInit(): void {
  }


}
