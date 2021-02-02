import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderInpinjComponent } from './readerinpinj.component';

describe('InpinjComponent', () => {
  let component: ReaderInpinjComponent;
  let fixture: ComponentFixture<ReaderInpinjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderInpinjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderInpinjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
