"use strict"
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    Edit(newText) {
        this.text = newText;
    }
}
class AttachedPost extends Post{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    MakeTextHighlighted(){
        this.highlighted = true;
    }
}
 let attachedPost = new AttachedPost('автор','текст','02.01.2022');
 attachedPost.Edit('новый текст');
 attachedPost.MakeTextHighlighted();
 console.log(attachedPost);