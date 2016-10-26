import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    isLogin(): Promise<boolean> {
        const api = "/users"
        return this.http.get(api).toPromise().then(response => response.text() == 'true').catch(this.handleError)
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}