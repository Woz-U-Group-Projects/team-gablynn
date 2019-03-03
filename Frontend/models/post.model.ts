export class Post {
    // [x: string]: string;
// constructor(){
//     this.id = '';
//     this.title = '';
//     this.description = '';
//     this.topicList = ''; //"minimalism" or "travel hacks"
//     this.image = '';
// }


    id: number;
    name: string;
    title: string ;
    description: string;
    topics: string; // "minimalism" or "travel hacks"
    image: string | any;
}
