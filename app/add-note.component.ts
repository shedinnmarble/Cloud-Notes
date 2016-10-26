import {Component, OnInit, Input} from '@angular/core';
import {NoteService} from "./notes.service";
import {Note} from "./note";

@Component({
    moduleId: module.id,
    selector: 'add-note',
    template:`<form >
    <div class="form-group">
        <label for="noteName">Note Name</label>
        <input type="text" class="form-control" id="noteName" placeholder="Note Name" name="name" #noteName  />
    </div>
    <div class="form-group">
        <label for="noteAuthor">Author</label>
        <input type="text" class="form-control" id="noteAuthor" placeholder="author" name="author" #noteAuthor />
    </div>
    <div class="form-group">
        <label for="noteContent">Note Name</label>

        <textarea class="form-control" id="noteContent" placeholder="Note Content" name="content" #noteContent></textarea>
    </div>
    <button type="button" class="btn btn-default" (click)="addNote(noteName.value,noteAuthor.value,noteContent.value);$window.location.href = '/home';">Submit</button>
</form>`
})
export class AddNoteComponent  {
    @Input()
    module:Note;
    constructor(private noteService:NoteService ){}

    addNote(name: string,author:string,content:string):void{
        console.log(name+"note");
        this.noteService.add(name,author,content);    
    }


}