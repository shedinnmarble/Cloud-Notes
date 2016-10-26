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
var post_service_1 = require("./post.service");
var post_1 = require("./post");
var AddPostComponent = (function () {
    function AddPostComponent(postService) {
        this.postService = postService;
    }
    AddPostComponent.prototype.addPost = function (name, author, content) {
        console.log(name + "post");
        this.postService.add(name, author, content);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], AddPostComponent.prototype, "module", void 0);
    AddPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-post',
            template: "<form >\n    <div class=\"form-group\">\n        <label for=\"postName\">Post Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"postName\" placeholder=\"Post Name\" name=\"name\" #postName  />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"postAuthor\">Author</label>\n        <input type=\"text\" class=\"form-control\" id=\"postAuthor\" placeholder=\"author\" name=\"author\" #postAuthor />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"postContent\">Post Name</label>\n\n        <textarea class=\"form-control\" id=\"postContent\" placeholder=\"Post Content\" name=\"content\" #postContent></textarea>\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"addPost(postName.value,postAuthor.value,postContent.value);$window.location.href = '/home';\">Submit</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], AddPostComponent);
    return AddPostComponent;
}());
exports.AddPostComponent = AddPostComponent;
//# sourceMappingURL=add-post.component.js.map