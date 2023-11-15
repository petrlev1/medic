import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NastroykiPage } from './nastroyki.page';

describe('NastroykiPage', () => {
  let component: NastroykiPage;
  let fixture: ComponentFixture<NastroykiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NastroykiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
