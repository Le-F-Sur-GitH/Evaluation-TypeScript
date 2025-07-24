import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHabitats } from './liste-habitats';

describe('ListeHabitats', () => {
  let component: ListeHabitats;
  let fixture: ComponentFixture<ListeHabitats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeHabitats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeHabitats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
