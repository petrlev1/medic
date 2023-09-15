import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalwinPage } from './modalwin.page';

describe('ModalwinPage', () => {
  let component: ModalwinPage;
  let fixture: ComponentFixture<ModalwinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalwinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
