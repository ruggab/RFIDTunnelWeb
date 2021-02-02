import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderWiramaComponent } from './readerwirama.component';

describe('ReaderWiramaComponent', () => {
  let component: ReaderWiramaComponent;
  let fixture: ComponentFixture<ReaderWiramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderWiramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderWiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
