import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
    selector: 'posts',
    templateUrl:'post.component.html'
})
export class PostComponent implements OnInit {
    posts:Post[];
    getPosts():void{
    this.postService.getPosts()
            .then(posts=>{this.posts=posts;console.log(posts)})
            .catch(x=>console.log(x));
        console.log("done")
    }
constructor(private postService:PostService ){}
    ngOnInit(): void {
        this.getPosts();
        console.log(this.posts);
    }

 }