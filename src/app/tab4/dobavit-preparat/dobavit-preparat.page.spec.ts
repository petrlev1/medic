import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DobavitPreparatPage } from './dobavit-preparat.page';

describe('DobavitPreparatPage', () => {
  let component: DobavitPreparatPage;
  let fixture: ComponentFixture<DobavitPreparatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DobavitPreparatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
