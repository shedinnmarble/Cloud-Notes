import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from './user'
import {Observable, Subject} from "rxjs";
import {Note} from "./note";
import {NoteSearchService} from "./note-search.service";
@Component({
    // moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html'
})
export class AppComponent  {
    

}
