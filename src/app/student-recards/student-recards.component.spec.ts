import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRecardsComponent } from './student-recards.component';

describe('StudentRecardsComponent', () => {
  let component: StudentRecardsComponent;
  let fixture: ComponentFixture<StudentRecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
