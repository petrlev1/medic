import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZapisiDetailPage } from './zapisi-detail.page';

describe('ZapisiDetailPage', () => {
  let component: ZapisiDetailPage;
  let fixture: ComponentFixture<ZapisiDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZapisiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
