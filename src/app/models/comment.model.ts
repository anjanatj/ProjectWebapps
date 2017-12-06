
export class Comment {
    private _id: string;
    private _name: string;
    private _description: string;

    static fromJSON(json): Comment {
        const com = new Comment(json.name, json.description);
        com._id = json._id;
        return com;
    }

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
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

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            description: this._description
        };
    }

}
