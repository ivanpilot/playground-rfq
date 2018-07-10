import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondServerComponent } from './bond-server.component';

describe('BondServerComponent', () => {
  let component: BondServerComponent;
  let fixture: ComponentFixture<BondServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
