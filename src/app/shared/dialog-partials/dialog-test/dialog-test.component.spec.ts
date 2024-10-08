import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTestComponent } from './dialog-test.component';

describe('DialogTestComponent', () => {
  let component: DialogTestComponent;
  let fixture: ComponentFixture<DialogTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
