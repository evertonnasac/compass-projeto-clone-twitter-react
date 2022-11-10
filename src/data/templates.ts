export interface Tweet  {
    id_tweet : string,
    id_author: string,
    text: string,
    likes: number 
    comments : Comments[]
    photo? : string
    time: string
}

export interface User {
    id_user?: string
    name?: string,
    tagname?: string,
    bio?:string,
    photo?: string
    followers? : string[]
    followings? : string[]
    login?: string,
    city?: string,
    password?: string,
    tweets? : string[]
    join?:string
}

export interface UserAuth{
    id_user: string,
   
}


export interface Comments {
    id_author : string
    comment: string
}


export class UserAuth {
    private _id_user: string
    private _name: string
    private _followers : User[] = []
    private _followings : User[] = []

    constructor(name:string){
        this._id_user = "id1"
        this._name = name
    }

    public get name(){
        return this._name
    }

    public get id(){
        return this._id_user
    }

    public get followers(){
        return [...this._followers]
    }
    
    public get following(){
        return [...this._followings]
    }
}





/*
export class Tweet  {
    private id_author: string
    private body: string
    private _comments: Comments[] = []
    private _likes: number

    constructor(id: string, txt: string){
        this.id_author = id
        this.body = txt
        this._likes = 0
       
    }

    public set comments(comment: Comments){ 
        this._comments.push(comment)
    }

    public addLike = () => {this._likes += 1}
}

*/


  
