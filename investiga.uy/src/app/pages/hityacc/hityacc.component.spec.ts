import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HityaccComponent } from './hityacc.component';

describe('HityaccComponent', () => {
  let component: HityaccComponent;
  let fixture: ComponentFixture<HityaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HityaccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HityaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
