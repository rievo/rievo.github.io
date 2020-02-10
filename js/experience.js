

class Experience{
    constructor(options){
        this.title = options.title;
        this.description = options.description;
        this.highlights = options.highlights; //[]
        this.techs = options.techs; //[]
        this.img_urls = options.img_urls

        this.cb = options.cb;
    }
}