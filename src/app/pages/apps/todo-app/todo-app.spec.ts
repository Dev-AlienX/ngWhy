import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApp } from './todo-app';

describe('TodoApp', () => {
  let component: TodoApp;
  let fixture: ComponentFixture<TodoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoApp],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table body for valid HTML structure', () => {
    const table = fixture.nativeElement.querySelector('table');

    expect(table).toBeTruthy();
    expect(table.querySelector('tbody')).not.toBeNull();
  });
});
