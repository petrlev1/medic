import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodtverditZapisPage } from './podtverdit-zapis.page';

describe('PodtverditZapisPage', () => {
  let component: PodtverditZapisPage;
  let fixture: ComponentFixture<PodtverditZapisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PodtverditZapisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
