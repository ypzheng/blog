export class Post {
    title: String = 'Example Title';
    subTitle: String = 'Example Subtitle';
    description: String = 'Example description. This can also be a preview of content';
    date: Date = new Date();
    tag: String = ''; // TODO: make this an enum

    constructor(title: String, subTitle: String, description: String, tag: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.tag = tag;
    }
}