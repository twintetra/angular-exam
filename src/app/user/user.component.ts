import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{

  constructor(private route: ActivatedRoute, public httpService: HttpService) {}

  id: number;
  private subscribe: any;
  formData = {
    name: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    phone: '',
    website: '',
    company: {
      name: ''
    }
  };
  error;

  ngOnInit(): void {
    this.subscribe = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.httpService.getDataUser(this.id);
    this.httpService.jsonUser.subscribe(
      (data) => this.formData = data,
      error => {this.error = error.message;});
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
