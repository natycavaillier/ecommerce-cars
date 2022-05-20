import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociarComponent } from './negociar.component';

describe('NegociarComponent', () => {
  let component: NegociarComponent;
  let fixture: ComponentFixture<NegociarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegociarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
