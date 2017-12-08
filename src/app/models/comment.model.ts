
export class Comment {
    private _id: string;
    private _description: string;

    static fromJSON(json): Comment {
        const com = new Comment(json.description);
        com._id = json._id;
        return com;
    }

    constructor(description: string) {
        this._description = description;
    }

    get id(): string {
        return this._id;
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    toJSON() {
        return {
            _id: this._id,
            description: this._description
        };
    }

}
