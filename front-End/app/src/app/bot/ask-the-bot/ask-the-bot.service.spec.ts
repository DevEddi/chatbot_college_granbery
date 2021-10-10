import { TestBed } from '@angular/core/testing';

import { AskTheBotService } from './ask-the-bot.service';

describe('AskTheBotService', () => {
  let service: AskTheBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskTheBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
