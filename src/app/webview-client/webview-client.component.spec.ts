import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewClientComponent } from './webview-client.component';

describe('WebviewClientComponent', () => {
  let component: WebviewClientComponent;
  let fixture: ComponentFixture<WebviewClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebviewClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebviewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
