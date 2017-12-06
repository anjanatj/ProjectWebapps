import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { QuestionDataService } from './question-data.service';
import { AuthenticationService } from '../user/authentication.service';

describe('QuestionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [QuestionDataService, AuthenticationService]
    });
  });

  it('should be created', inject([QuestionDataService], (service: QuestionDataService) => {
    expect(service).toBeTruthy();
  }));
});
