import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CommentComponent } from '../comment/comment.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionDataService } from '../../services/question-data.service';
import { AuthenticationService } from '../../user/authentication.service';

describe('QuestionDetailComponent', () => {
  let component: QuestionDetailComponent;
  let fixture: ComponentFixture<QuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDetailComponent, CommentComponent ],
      imports: [RouterTestingModule, HttpModule],
      providers: [QuestionDataService, AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
