import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskDetailsService } from '../services/task-details.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  tasks: Task[] = [];
  task: any = {
    Id: '0',
    Tasktitle: '',
    Description: '',
    Duedate: '',
    Status: 'Pending',
    Priority: 'Medium',
  }; // ✅ Initialize object
  idNo = 0;

  constructor(private taskService: TaskDetailsService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.idNo = this.tasks.length + 1;
    });
  }

  addTask() {
    const newTask: Task = {
      Id: this.tasks.length + 1,
      Tasktitle: this.task.Tasktitle,
      Description: this.task.Description,
      Duedate: this.task.Duedate,
      Status: this.task.Status,
      Priority: this.task.Priority,
    };
    this.taskService.addTask(newTask);
  }
}
