import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDuvidaComponent } from './view-duvida.component';

describe('ViewDuvidaComponent', () => {
  let component: ViewDuvidaComponent;
  let fixture: ComponentFixture<ViewDuvidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDuvidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
