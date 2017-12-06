import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionDataService } from '../services/question-data.service';
import { QuestionComponent } from './question/question.component';
import { CommentComponent } from './comment/comment.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionResolver } from './question-resolver.service';

const routes = [
  { path: 'list', component: QuestionListComponent },
  { path: 'add', component: AddQuestionComponent },
  { path: ':id', component: QuestionDetailComponent,
    resolve: { question: QuestionResolver} }
];

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent,
    AddQuestionComponent,
    QuestionListComponent,
    QuestionDetailComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    QuestionDataService,
    QuestionResolver
  ]
})

export class QuestionModule { }
