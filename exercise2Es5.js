"use strict"
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.Edit = function(newText){
this.text = newText;
}

function AttachedPost(author, text, date,){
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.MakeTextHighlighted = function(){
    this.highlighted = true;
}
let attachedPost = new AttachedPost('автор','текст','02.01.2022');
attachedPost.Edit('новый текст')
attachedPost.MakeTextHighlighted();
console.log(attachedPost);
