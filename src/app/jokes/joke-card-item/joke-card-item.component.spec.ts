import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCardItemComponent } from './joke-card-item.component';

describe('JokeCardItemComponent', () => {
  let component: JokeCardItemComponent;
  let fixture: ComponentFixture<JokeCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
