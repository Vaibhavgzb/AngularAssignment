import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCommunicateComponent } from './message-communicate.component';

describe('MessageCommunicateComponent', () => {
  let component: MessageCommunicateComponent;
  let fixture: ComponentFixture<MessageCommunicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCommunicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
