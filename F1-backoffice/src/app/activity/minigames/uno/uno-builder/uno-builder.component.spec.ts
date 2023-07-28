import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoBuilderComponent } from './uno-builder.component';

describe('UnoBuilderComponent', () => {
  let component: UnoBuilderComponent;
  let fixture: ComponentFixture<UnoBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnoBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnoBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
