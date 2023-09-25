import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBGEComponent } from './ibge.component';

describe('IBGEComponent', () => {
  let component: IBGEComponent;
  let fixture: ComponentFixture<IBGEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IBGEComponent]
    });
    fixture = TestBed.createComponent(IBGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
