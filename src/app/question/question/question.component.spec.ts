import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AuthenticationService } from '../../user/authentication.service';
import { Question } from '../../models/question.model';
import { Comment } from '../../models/comment.model';
import { QuestionComponent } from './question.component';
import { CommentComponent } from '../comment/comment.component';
import { QuestionDataService } from '../../services/question-data.service';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent, CommentComponent ],
      imports: [HttpModule],
      providers: [AuthenticationService, QuestionDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('question name should be there', () => {
    component.question = new Question('testQuestion', 'testDescription' [AddComment()]);
    fixture.detectChanges();

    expect(el.textContent).toBe('testQuestion');
  });*/
});
