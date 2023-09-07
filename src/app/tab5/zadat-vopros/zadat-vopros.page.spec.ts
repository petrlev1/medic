import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZadatVoprosPage } from './zadat-vopros.page';

describe('ZadatVoprosPage', () => {
  let component: ZadatVoprosPage;
  let fixture: ComponentFixture<ZadatVoprosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZadatVoprosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
