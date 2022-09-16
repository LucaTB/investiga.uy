import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclComponent } from './decl.component';

describe('DeclComponent', () => {
  let component: DeclComponent;
  let fixture: ComponentFixture<DeclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
