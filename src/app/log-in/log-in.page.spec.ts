import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LogInPage } from './log-in.page';

describe('LogInPage', () => {
  let component: LogInPage;
  let fixture: ComponentFixture<LogInPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogInPage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LogInPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

