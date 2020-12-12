import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getDataPosts();
  }

}
