import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faEye = faEye;
  faChevronDown = faChevronDown;
  option: any = "0"

  constructor(private route: ActivatedRoute,private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
    this.option = this.route.snapshot.paramMap.get('opt');
    console.log("Route Params : ", this.route.snapshot.paramMap)
    console.log(this.option)
  }

}
