import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssledovaniyaPage } from './issledovaniya.page';

describe('IssledovaniyaPage', () => {
  let component: IssledovaniyaPage;
  let fixture: ComponentFixture<IssledovaniyaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IssledovaniyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
