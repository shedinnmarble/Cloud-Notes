import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Note} from "./note";
@Injectable()
export class NoteSearchService {

    constructor(private http:Http) { }
    search(term:string):Observable<Note[]>{
        return this.http.get('/api/note/${term}').map(responce=>JSON.parse(responce.text()) as Note[])
    }

}