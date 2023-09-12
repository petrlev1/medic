import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinCodePage } from './pin-code.page';

describe('PinCodePage', () => {
  let component: PinCodePage;
  let fixture: ComponentFixture<PinCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PinCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
