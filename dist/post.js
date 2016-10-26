"use strict";
var Post = (function () {
    function Post(_id, name, author, content) {
        this._id = _id;
        this.name = name;
        this.author = author;
        this.content = content;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map