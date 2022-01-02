import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoriesDialogComponent } from './victories-dialog.component';

describe('VictoriesDialogComponent', () => {
  let component: VictoriesDialogComponent;
  let fixture: ComponentFixture<VictoriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictoriesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
