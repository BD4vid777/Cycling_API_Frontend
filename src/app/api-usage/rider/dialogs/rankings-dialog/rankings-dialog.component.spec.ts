import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsDialogComponent } from './rankings-dialog.component';

describe('RankingsDialogComponent', () => {
  let component: RankingsDialogComponent;
  let fixture: ComponentFixture<RankingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
