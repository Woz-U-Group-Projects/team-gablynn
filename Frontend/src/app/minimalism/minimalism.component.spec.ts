import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalismComponent } from './minimalism.component';

describe('MinimalismComponent', () => {
  let component: MinimalismComponent;
  let fixture: ComponentFixture<MinimalismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
