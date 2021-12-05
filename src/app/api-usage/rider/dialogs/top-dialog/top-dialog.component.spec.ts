import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDialogComponent } from './top-dialog.component';

describe('TopDialogComponent', () => {
  let component: TopDialogComponent;
  let fixture: ComponentFixture<TopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
