import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  Id: number;
  Tasktitle: string;
  Description: string;
  Duedate: string;
  Status: string;
  Priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {
  

  private tasksSubject = new BehaviorSubject<Task[]>([
    { Id: 1, Tasktitle: 'Task 1', Description: 'John Doe', Duedate: '2025-03-15', Status: 'Inprogress', Priority: 'High' },
    { Id: 2, Tasktitle: 'Task 2', Description: 'Jane Smith', Duedate: '2025-03-16', Status: 'Inprogress', Priority: 'High' },
    { Id: 3, Tasktitle: 'Task 3', Description: 'Robert Brown', Duedate: '2025-03-17', Status: 'Inprogress', Priority: 'High' },
    { Id: 4, Tasktitle: 'Task 4', Description: 'Emily Johnson', Duedate: '2025-03-18', Status: 'Inprogress', Priority: 'High' }
  ]);

  tasks$: Observable<Task[]> = this.tasksSubject.asObservable(); // Expose as Observable

  constructor() {}

  // Fetch Data
  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  // Add a Task
  addTask(newTask: Task) {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  // Update a Task
  updateTask(id: number, updatedTask: Partial<Task>) {
    const updatedTasks = this.tasksSubject.getValue().map(task =>
      task.Id === id ? { ...task, ...updatedTask } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  // Delete a Task
  deleteTask(id: number) {
    const filteredTasks = this.tasksSubject.getValue().filter(task => task.Id !== id);
    this.tasksSubject.next(filteredTasks);
  }

}
