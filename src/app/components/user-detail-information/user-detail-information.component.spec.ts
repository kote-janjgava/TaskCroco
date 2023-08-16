import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailInformationComponent } from './user-detail-information.component';

describe('UserDetailInformationComponent', () => {
  let component: UserDetailInformationComponent;
  let fixture: ComponentFixture<UserDetailInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailInformationComponent]
    });
    fixture = TestBed.createComponent(UserDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
