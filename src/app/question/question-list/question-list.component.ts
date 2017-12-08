import { Comment } from '../../models/comment.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionDataService } from '../../services/question-data.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QuestionDataService]
})
export class QuestionListComponent implements OnInit {
  @Output() public newComment = new EventEmitter<Comment>();
  public comment: FormGroup;
  private _questions: Question[];
  constructor(private _questionDataService: QuestionDataService) { }

  ngOnInit() {
    this._questionDataService.questions.subscribe(items => this._questions = items);
  }

  get questions() {
    return this._questions;
  }

  removeQuestion(question: Question) {
    this._questionDataService.removeQuestion(question).subscribe(item =>
      this._questions = this._questions.filter(val => item.id !== val.id)
    );
  }

  /*addComment(question: Question) {
  }*/

}
