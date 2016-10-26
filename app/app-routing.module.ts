
import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import {AddNoteComponent} from "./add-note.component";
import {AppComponent} from "./app.component";
import {NoteComponent} from "./notes.component";
import {NoteDetailComponent} from "./note-detail.component"
import {LoginComponent} from "./login.component"
const routes: Routes =[
    {
        path: 'add',
        component: AddNoteComponent
     },
     {
        path:'home',
        component:NoteComponent

    },{
        path:'login',
        component:LoginComponent
    },{
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    },{
        path:'note/:id',
        component:NoteDetailComponent
    }
     // ,
    // {
    //     path: '',
    //     redirectTo: 'add',
    //     pathMatch: 'full'
    // },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}