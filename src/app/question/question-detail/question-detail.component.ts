import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Question } from '../../models/question.model';
import { Comment } from '../../models/comment.model';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Output() public newComment = new EventEmitter<Comment>();
  private _question: Question;
  public questionGroup: FormGroup;

  constructor(private fb: FormBuilder,  private route: ActivatedRoute, private qds: QuestionDataService, private _router: Router) { }

  get question() {
    return this._question;
  }

  ngOnInit() {
    this.route.data.subscribe(item => this._question = item['question']);
    this.questionGroup = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    const comment = new Comment(this.questionGroup.value.description);
    this.qds.addCommentToQuestion(comment, this._question).subscribe();
    this._router.navigate(['question/list']);
  }

}
