import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssledovaniyaDetailPage } from './issledovaniya-detail.page';

describe('IssledovaniyaDetailPage', () => {
  let component: IssledovaniyaDetailPage;
  let fixture: ComponentFixture<IssledovaniyaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IssledovaniyaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
