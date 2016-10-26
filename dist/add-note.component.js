"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notes_service_1 = require("./notes.service");
var note_1 = require("./note");
var AddNoteComponent = (function () {
    function AddNoteComponent(noteService) {
        this.noteService = noteService;
    }
    AddNoteComponent.prototype.addNote = function (name, author, content) {
        console.log(name + "note");
        this.noteService.add(name, author, content);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', note_1.Note)
    ], AddNoteComponent.prototype, "module", void 0);
    AddNoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-note',
            template: "<form >\n    <div class=\"form-group\">\n        <label for=\"noteName\">Note Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"noteName\" placeholder=\"Note Name\" name=\"name\" #noteName  />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"noteAuthor\">Author</label>\n        <input type=\"text\" class=\"form-control\" id=\"noteAuthor\" placeholder=\"author\" name=\"author\" #noteAuthor />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"noteContent\">Note Name</label>\n\n        <textarea class=\"form-control\" id=\"noteContent\" placeholder=\"Note Content\" name=\"content\" #noteContent></textarea>\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"addNote(noteName.value,noteAuthor.value,noteContent.value);$window.location.href = '/home';\">Submit</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [notes_service_1.NoteService])
    ], AddNoteComponent);
    return AddNoteComponent;
}());
exports.AddNoteComponent = AddNoteComponent;
//# sourceMappingURL=add-note.component.js.map