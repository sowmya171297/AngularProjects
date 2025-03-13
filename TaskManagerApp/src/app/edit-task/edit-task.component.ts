import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  taskId: string | null = null;
  task: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = {
      Tasktitle: `Task ${this.taskId}`,
      Description: 'Sample Task Description',
      Duedate: '2024-02-15',
      Status: 'In Progress',
      Priority: 'High',
    };
  }
  saveChanges() {
    console.log('Updated Task:', this.task);
    alert('Task updated successfully!');
  }
}
