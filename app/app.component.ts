import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private loginService: LoginService, private route: Router,
        private location: Location) { }
    ngOnInit(): void {
        this.loginService.isLogin().then(function (data) {
            console.log(data);
            if (data) {
                console.log(" login")
            } else {
                console.log("no login")
              //  this.location.back();
            }
        })
    }
}
