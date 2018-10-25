import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDisplayComponent } from './dropdown-display.component';

describe('DropdownDisplayComponent', () => {
  let component: DropdownDisplayComponent;
  let fixture: ComponentFixture<DropdownDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
