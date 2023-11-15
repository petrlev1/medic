import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LichnieDanniePage } from './lichnie-dannie.page';

describe('LichnieDanniePage', () => {
  let component: LichnieDanniePage;
  let fixture: ComponentFixture<LichnieDanniePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LichnieDanniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
