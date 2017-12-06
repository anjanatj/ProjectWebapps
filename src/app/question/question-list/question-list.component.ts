import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QuestionDataService]
})
export class QuestionListComponent implements OnInit {
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

}
