import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListMemberComponent } from './filter-list-member.component';

describe('FilterListMemberComponent', () => {
  let component: FilterListMemberComponent;
  let fixture: ComponentFixture<FilterListMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
