import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import { Question } from '../models/question.model';
import { Comment } from '../models/comment.model';
import { AuthenticationService } from '../user/authentication.service';



@Injectable()
export class QuestionDataService {
  private  _appUrl = '/API';
  private _questions;

    constructor(private http: Http, private auth: AuthenticationService) {
    }

    get questions(): Observable<Question[]> {
      return this.http.get(`${this._appUrl}/questions`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
        .map(response => response.json().map(item => Question.fromJSON(item)));
    }

    addNewQuestion(question): Observable<Question> {
      return this.http.post(`${this._appUrl}/questions`, question)
        .map(res => res.json()).map(item => Question.fromJSON(item));
    }

    getQuestion(id): Observable<Question> {
      return this.http.get(`${this._appUrl}/question/${id}`)
        .map(response => response.json()).map(item => Question.fromJSON(item));
    }

    addCommentToQuestion(com: Comment, ques: Question): Observable<Comment> {
      return this.http.post(`${this._appUrl}/question/${ques.id}/comments`, com)
        .map(res => res.json()).map(item => Comment.fromJSON(item));
    }

    removeQuestion(ques) {
      return this.http.delete(`${this._appUrl}/question/${ques.id}`).map(res => res.json()).map(item => Question.fromJSON(item));
    }
}
