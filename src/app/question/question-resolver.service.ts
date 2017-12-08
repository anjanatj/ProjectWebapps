import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { QuestionDataService } from '../services/question-data.service';
import { Question } from '../models/question.model';

@Injectable()
export class QuestionResolver implements Resolve< Question > {
  constructor(private questionService: QuestionDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> {
      return this.questionService.getQuestion(route.params['id']);
    }
}
