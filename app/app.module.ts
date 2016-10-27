import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteService } from "./notes.service";
import { NoteComponent } from "./notes.component";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { NoteDetailComponent } from "./note-detail.component"
import { AddNoteComponent } from "./add-note.component";
import {LoginComponent} from "./login.component"
import {LoginService} from './login.service'
 import{NoteSearchComponent} from './note-search.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent
    ,
    NoteComponent,
    NoteDetailComponent,
    AddNoteComponent,
    LoginComponent
    ,
    NoteSearchComponent
      
  ],
  providers: [NoteService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
