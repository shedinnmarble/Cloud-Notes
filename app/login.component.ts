import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
@Component({
    moduleId: module.id,
    selector: 'login',
    template:`
    <form>
	<div class="form-group">
		<label for="exampleInputEmail1">Email address</label>
		<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" #email>
	</div>
	<div class="form-group">
		<label for="exampleInputPassword1">Password</label>
		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" #pwd>
	</div>
	<button type="button" (click)="login(email.value,pwd.value)" class="btn btn-default">Login</button>
</form>`
})
export class LoginComponent implements OnInit {
    constructor(private loginService:LoginService) { }

    ngOnInit() { }
	login(email,pwd){
		this.loginService.login(email,pwd).then(function(result){
			if(result){
				window.location.href = "/home"
			}else{
				alert("login failed, please check your user name or pwd");
			}
		});
	}

}