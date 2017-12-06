import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  private _question: Question;

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }

  get question() {
    return this._question;
  }

  ngOnInit() {
    this.route.data.subscribe(item => this._question = item['question']);
  }

}
