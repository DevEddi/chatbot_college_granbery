import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBotClientComponent } from './dialog-bot-client.component';

describe('DialogBotClientComponent', () => {
  let component: DialogBotClientComponent;
  let fixture: ComponentFixture<DialogBotClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBotClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBotClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
