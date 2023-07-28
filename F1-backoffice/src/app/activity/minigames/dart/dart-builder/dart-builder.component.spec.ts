import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartBuilderComponent } from './dart-builder.component';

describe('DartBuilderComponent', () => {
  let component: DartBuilderComponent;
  let fixture: ComponentFixture<DartBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DartBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
