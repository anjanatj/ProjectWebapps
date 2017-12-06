import { Comment } from './comment.model';

export class Question {
    private _id: string;
    private _name: string;
    private _description: string;
    private _comments: Comment[];

    static fromJSON(json): Question {
        const ques = new Question(json.name, json.description, json.comments);
        ques._id = json._id;
        return ques;
    }
    constructor(name: string, description: string, comments?: Comment[]) {
        this._name = name;
        this._description = description;
        this._comments = comments || new Array<Comment>();
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get comments(): Comment[] {
        return this._comments;
    }
    addComment(com: Comment) {
        this._comments.push(com);
    }
    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            description: this._description,
            comments: this._comments
        };
    }
}
