import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdlistComponent } from './tdlist.component';

describe('TdlistComponent', () => {
  let component: TdlistComponent;
  let fixture: ComponentFixture<TdlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
