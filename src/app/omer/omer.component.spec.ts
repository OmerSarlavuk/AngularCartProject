import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmerComponent } from './omer.component';

describe('OmerComponent', () => {
  let component: OmerComponent;
  let fixture: ComponentFixture<OmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmerComponent]
    });
    fixture = TestBed.createComponent(OmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
