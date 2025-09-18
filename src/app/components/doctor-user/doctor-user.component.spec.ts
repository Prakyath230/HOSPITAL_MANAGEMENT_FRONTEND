import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUserComponent } from './doctor-user.component';

describe('DoctorUserComponent', () => {
  let component: DoctorUserComponent;
  let fixture: ComponentFixture<DoctorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
