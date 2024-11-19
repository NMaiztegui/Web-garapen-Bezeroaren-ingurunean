import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NireOsagaiaComponent } from './nire-osagaia.component';

describe('NireOsagaiaComponent', () => {
  let component: NireOsagaiaComponent;
  let fixture: ComponentFixture<NireOsagaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NireOsagaiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NireOsagaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
