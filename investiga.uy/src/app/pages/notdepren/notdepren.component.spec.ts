import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdeprenComponent } from './notdepren.component';

describe('NotdeprenComponent', () => {
  let component: NotdeprenComponent;
  let fixture: ComponentFixture<NotdeprenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotdeprenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotdeprenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
