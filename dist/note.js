"use strict";
var Note = (function () {
    function Note(_id, title, author, content, createDate, lastModifyDate) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.createDate = createDate;
        this.lastModifyDate = lastModifyDate;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map