import { Component, OnInit } from '@angular/core';
import {NoteService} from "./notes.service";
import {Note} from "./note";

@Component({
    selector: 'notes',
    templateUrl:'note.component.html'
})
export class NoteComponent implements OnInit {
    notes:Note[];
    getNotes():void{
    this.noteService.getNotes()
            .then(notes=>{this.notes=notes;console.log(notes)})
            .catch(x=>console.log(x));
        console.log("done")
    }
constructor(private noteService:NoteService ){}
    ngOnInit(): void {
        this.getNotes();
        console.log(this.notes);
    }

 }