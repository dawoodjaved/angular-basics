import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsBasicsComponent } from './reactive-forms-basics.component';

describe('ReactiveFormsBasicsComponent', () => {
  let component: ReactiveFormsBasicsComponent;
  let fixture: ComponentFixture<ReactiveFormsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
