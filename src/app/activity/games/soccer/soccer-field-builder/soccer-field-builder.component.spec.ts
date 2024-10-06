import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerFieldBuilderComponent } from './soccer-field-builder.component';

describe('SoccerFieldBuilderComponent', () => {
  let component: SoccerFieldBuilderComponent;
  let fixture: ComponentFixture<SoccerFieldBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerFieldBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerFieldBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
