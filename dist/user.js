"use strict";
var User = (function () {
    function User(_id, name, password, email) {
        this._id = _id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map