import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZakazatTestPage } from './zakazat-test.page';

describe('ZakazatTestPage', () => {
  let component: ZakazatTestPage;
  let fixture: ComponentFixture<ZakazatTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZakazatTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
