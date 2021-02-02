import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReaderComponent } from './managereader.component';

describe('ManageReaderComponent', () => {
  let component: ManageReaderComponent;
  let fixture: ComponentFixture<ManageReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
