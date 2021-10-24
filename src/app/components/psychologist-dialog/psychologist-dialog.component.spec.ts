import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistDialogComponent } from './psychologist-dialog.component';

describe('PsychologistDialogComponent', () => {
  let component: PsychologistDialogComponent;
  let fixture: ComponentFixture<PsychologistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
