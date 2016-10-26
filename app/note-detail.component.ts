// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Note } from './note';
import {NoteService} from './notes.service'
@Component({
    selector: 'my-note-detail',
    templateUrl: 'note-detail.component.html'
    // ,
    // styleUrls: ['note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
    @Input()
    note: Note;
    constructor(
        private noteService: NoteService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    save(): void {
        this.noteService.update(this.note)
            .then(() => this.goBack());
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.noteService.getNote(id)
                .then(note => this.note = note);
        });
    }
    goBack(): void {
        this.location.back();
    }
}
