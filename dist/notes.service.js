/**
 * Created by 985219 on 10/19/2016.
 */
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.noteUrl = '/api/note';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.noteUrl)
            .toPromise()
            .then(function (response) { return JSON.parse(response.text()); })
            .catch(this.handleError);
    };
    NoteService.prototype.add = function (name, author, content) {
        console.log(name);
        return this.http.
            post(this.noteUrl, { title: name, author: author, content: content })
            .toPromise()
            .then(function (response) { return JSON.parse(response.text()); })
            .catch(this.handleError);
    };
    NoteService.prototype.getNote = function (id) {
        return this.getNotes().then(function (notes) { return notes.find(function (note) { return note._id === id; }); });
    };
    NoteService.prototype.update = function (note) {
        var url = this.noteUrl + "/" + note._id;
        console.log(url);
        return this.http
            .put(url, note)
            .toPromise()
            .then(function () { return note; })
            .catch(this.handleError);
    };
    NoteService.prototype.delete = function (note) {
        var url = this.noteUrl + "/" + note._id;
        this.http.delete(url).toPromise().then(function () { return note; }).catch(this.handleError);
    };
    NoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=notes.service.js.map