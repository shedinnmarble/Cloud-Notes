/**
 * Created by 985219 on 10/19/2016.
 */

import { Injectable } from '@angular/core'
import { Note } from './note'

import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
    private noteUrl = '/api/note'
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    getNotes(): Promise<Note[]> {
        return this.http.get(this.noteUrl)
            .toPromise()
            .then(response => JSON.parse(response.text()) as Note[])
            .catch(this.handleError)
    }
    add(name: string, author: string, content: string): Promise<Note> {
        console.log(name);
        return this.http.
            post(this.noteUrl, { title: name, author: author, content: content })
            .toPromise()
            .then(response => JSON.parse(response.text()) as Note)
            .catch(this.handleError)
    }
    getNote(id: string): Promise<Note> {
        return this.getNotes().then(notes => notes.find(note => note._id === id));
    }
      update(note: Note): Promise<Note> {
        const url = `${this.noteUrl}/${note._id}`;
        console.log(url);
        return this.http
            .put(url, note)
            .toPromise()
            .then(() => note)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
