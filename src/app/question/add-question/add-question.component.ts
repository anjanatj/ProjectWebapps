import { Router } from '@angular/router';
import { QuestionDataService } from '../../services/question-data.service';
import { Question } from '../../models/question.model';
import { Comment } from '../../models/comment.model';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  providers: [QuestionDataService]
})
export class AddQuestionComponent implements OnInit {
  @Output() public newQuestion = new EventEmitter<Question>();
  public question: FormGroup;
  constructor(private fb: FormBuilder, private _questionDataService: QuestionDataService, private _router: Router) { }
  get comments(): FormArray {
    return <FormArray>this.question.get('comments');
  }
  ngOnInit() {
     this.question = this.fb.group({
       name: ['', [Validators.required, Validators.minLength(2)]],
       description: ['', [Validators.required, Validators.minLength(2)]],
       comments: this.fb.array([ this.createComments() ])
     });

     this.comments.statusChanges.debounceTime(400).distinctUntilChanged().subscribe( data => {
       if ( data === 'VALID') {
         this.comments.push(this.createComments());
       }
     });
  }
  createComments(): FormGroup {
    return this.fb.group({
      description: ['']
    });
  }
  onSubmit() {
    const question = new Question(this.question.value.name, this.question.value.description);
    /*for (const com of this.question.value.comments) {
      if (com.commentname.length > 2) {
        const comment = new Comment(com.commentname, com.description);
        question.addComment(comment);
      }
    }*/
    this._questionDataService.addNewQuestion(question).subscribe(item => {
      const comt = question.comments.map(com =>
        this._questionDataService.addCommentToQuestion(com, item));

      Observable.forkJoin(...comt).subscribe( (comments: Comment[]) => {
        for (const com of comments) {
          item.addComment(com);
        }
        this._router.navigate(['question-list']);
      }
      );
    });
  }
}
