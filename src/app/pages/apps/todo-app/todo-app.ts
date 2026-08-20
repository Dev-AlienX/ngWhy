import { Component, computed, effect, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface task {
  id: number;
  name: string;
  isDone: boolean;
  listedIn?: string;
}

@Component({
  selector: 'app-todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.scss',
})
export class TodoApp {
  taskLists = ['work', 'email'];
  selectedList = signal<string>('All');
  taskName = signal<string>('');
  allTasks = signal<task[]>([]);
  nextId: number = 1;

  totalTask = computed(() => this.allTasks().length);
  constructor() {
    effect(() => {
      console.log(`Signal value changed to: ${this.taskName()}`);
    });
  }
  // totalTask = // make it computed signal

  saveTask(): void {
    if (!this.taskName().trim()) return;
    if (this.selectedList() === '' || this.selectedList() === 'All') {
      this.allTasks.update((item) => [
        ...item,
        {
          id: this.nextId++,
          name: this.taskName(),
          isDone: false,
          listedIn: this.selectedList(),
        },
      ]);
      this.taskName.set('');
      this.selectedList.set('All');
    } else {
    }
  }

  isDone(id: number) {
    this.allTasks.update((list) =>
      list.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)),
    );
  }
  moveTo(id: any) {
    console.log(id);
  }
  deleteTask(id: number) {
    this.allTasks.update((list) => list.filter((t) => t.id !== id));
  }
}
