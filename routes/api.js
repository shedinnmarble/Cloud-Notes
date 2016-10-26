var express = require('express');
var path = require('path')
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dewei:dewei@ds031257.mlab.com:31257/cloud-notes');
var noteSchema = new mongoose.Schema({
    //  _id: String,
    title: String,
    author: String,
    content: String,
    createDate: Date,
    lastModifyDate: Date
})
var Note = mongoose.model('Note', noteSchema);

/* GET home page. */
router.get('/note', function (req, res, next) {
    console.log(req.session);
    var dewei = new Note({
        title: "first note",
        author: 'dewei',
        content: "this is my first content",
        createDate: new Date(),
        lastModifyDate: new Date()
    })
    // dewei.save(function (err) {
    //     if (err) console.log(err)
    // });
    Note.find({}, { "__v": 0 }, function (err, posts) {
        if (err) console.log(err)
        res.send(posts)
    })

});
router.post("/note", function (req, res) {
    // console.log(req.body)
    var note = new Note({
        //  _id:_id,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        createDate: req.body.createDate,
        lastModifyDate: new Date()
    })

    note.save(function (err, data) {
        if (err) console.log(err);
        res.send(data);
    })
})
router.put("/note/:id", function (req, res) {
    const _id = req.params.id;
    var post = new Note({
        //  _id:_id,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        createDate: req.body.createDate,
        lastModifyDate: new Date()
    })
    //  console.log(post)
    Note.findOne({ '_id': _id }, function (err, data) {
        if (err) console.log(err);
        console.log(data)
        data.title = req.body.title
        data.author = req.body.author
        data.content = req.body.content
        data.createDate = req.body.createDate
        data.lastModifyDate = new Date()
        data.save();
        res.send(data);
    })
})
module.exports = router;
