import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenhoInteresseComponent } from './tenho-interesse.component';

describe('TenhoInteresseComponent', () => {
  let component: TenhoInteresseComponent;
  let fixture: ComponentFixture<TenhoInteresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenhoInteresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenhoInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
