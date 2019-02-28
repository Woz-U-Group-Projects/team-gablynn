export class Post {
    [x: string]: string;	
constructor(){
    this.id = '';
    this.title = '';
    this.description = '';
    this.topicList = ''; //"minimalism" or "travel hacks"
    this.image = '';
}
}