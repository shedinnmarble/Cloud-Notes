import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from './user'
@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    api = "/users"
    isLogin(): Promise<User> {

        return this.http.get(this.api).toPromise().then(response =>JSON.parse(response.text()) as User).catch(this.handleError)
    }
    login(email: string, pwd: string): Promise<User> {
        return this.http
            .post(this.api, { email: email, pwd: pwd })
            .toPromise()
            .then(response=>JSON.parse(response.text()) as User)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}