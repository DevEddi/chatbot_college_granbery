import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaChatBotComponent } from './cria-chat-bot.component';

describe('CriaChatBotComponent', () => {
  let component: CriaChatBotComponent;
  let fixture: ComponentFixture<CriaChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaChatBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
