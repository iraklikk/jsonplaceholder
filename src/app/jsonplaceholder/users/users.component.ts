import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Observable to get all user's from backend
  users$ = this.jsonService.getUsers();

  // using jsonService to get http requests
  constructor(private jsonService: JsonplaceholderService) { }

  ngOnInit(): void {
  }


}
