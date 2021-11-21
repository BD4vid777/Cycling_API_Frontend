import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSidenavComponent } from './api-sidenav.component';

describe('ApiSidenavComponent', () => {
  let component: ApiSidenavComponent;
  let fixture: ComponentFixture<ApiSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
