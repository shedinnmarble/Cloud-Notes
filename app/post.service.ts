/**
 * Created by 985219 on 10/19/2016.
 */

import { Injectable } from '@angular/core'
import { Post } from './post'

import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
   
    private noteUrl='/api/note'
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    getPosts(): Promise<Post[]> {
        return this.http.get(this.noteUrl)
            .toPromise()
            .then(response =>JSON.parse(response.text()) as Post[])
            .catch(this.handleError)
    }
    add(name:string,author:string,content:string):Promise<Post>{
        console.log(name);
        return this.http.
        post(this.noteUrl,{name:name,author:author,content:content})
            .toPromise()
            .then(response =>JSON.parse(response.text()) as Post)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
