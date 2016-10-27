import { Component, Input, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Note} from "./note";
import {NoteSearchService} from "./note-search.service";
@Component({
   // moduleId: module.id,
    selector: 'note-search',
    templateUrl: 'note-search.component.html',
    providers:[NoteSearchService]

})
export class NoteSearchComponent  {
 
    constructor(private noteSearchService: NoteSearchService) {
    }

    // notes: Observable<Note[]>;
    // private searchTerms = new Subject<string>();

    // // Push a search term into the observable stream.
    // search(term: string): void {
    //     this.searchTerms.next(term);
    // }

    // ngOnInit(): void {
    //     this.notes = this.searchTerms
    //         .debounceTime(300)        // wait for 300ms pause in events
    //         .distinctUntilChanged()   // ignore if next search term is same as previous
    //         .switchMap(term => term   // switch to new observable each time
    //             // return the http search observable
    //             ? this.noteSearchService.search(term)
    //             // or the observable of empty heroes if no search term
    //             : Observable.of<Note[]>([]))
    //         .catch(error => {
    //             // TODO: real error handling
    //             console.log(error);
    //             return Observable.of<Note[]>([]);
    //         });

    // }
}