import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdatacardComponent } from './topdatacard.component';

describe('TopdatacardComponent', () => {
  let component: TopdatacardComponent;
  let fixture: ComponentFixture<TopdatacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopdatacardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopdatacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
