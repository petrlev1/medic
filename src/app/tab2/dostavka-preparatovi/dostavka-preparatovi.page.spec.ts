import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DostavkaPreparatoviPage } from './dostavka-preparatovi.page';

describe('DostavkaPreparatoviPage', () => {
  let component: DostavkaPreparatoviPage;
  let fixture: ComponentFixture<DostavkaPreparatoviPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DostavkaPreparatoviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
