import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPerguntaComponent } from './view-pergunta.component';

describe('ViewPerguntaComponent', () => {
  let component: ViewPerguntaComponent;
  let fixture: ComponentFixture<ViewPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
