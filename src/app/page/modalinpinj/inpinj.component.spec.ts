import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpinjComponent } from './inpinj.component';

describe('InpinjComponent', () => {
  let component: InpinjComponent;
  let fixture: ComponentFixture<InpinjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpinjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InpinjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
