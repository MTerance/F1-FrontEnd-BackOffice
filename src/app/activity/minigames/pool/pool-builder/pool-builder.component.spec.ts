import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolBuilderComponent } from './pool-builder.component';

describe('PoolBuilderComponent', () => {
  let component: PoolBuilderComponent;
  let fixture: ComponentFixture<PoolBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
