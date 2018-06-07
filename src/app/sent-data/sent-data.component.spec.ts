import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentDataComponent } from './sent-data.component';

describe('SentDataComponent', () => {
  let component: SentDataComponent;
  let fixture: ComponentFixture<SentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
