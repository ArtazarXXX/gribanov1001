import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTableComponent } from './good-table.component';

describe('GoodTableComponent', () => {
  let component: GoodTableComponent;
  let fixture: ComponentFixture<GoodTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
