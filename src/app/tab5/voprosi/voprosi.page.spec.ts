import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoprosiPage } from './voprosi.page';

describe('VoprosiPage', () => {
  let component: VoprosiPage;
  let fixture: ComponentFixture<VoprosiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoprosiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
