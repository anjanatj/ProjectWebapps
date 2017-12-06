import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  @Input() public question: Question;
  @Output() public deleteQuestion = new EventEmitter<Question>();

  constructor(private _questionDataService: QuestionDataService) {}

  ngOnInit() {
  }
  removeQuestion() {
    this.deleteQuestion.emit(this.question);
  }
}
