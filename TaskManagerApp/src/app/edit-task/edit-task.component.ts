import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  taskId: string | null = null;
  task: any = null;


  // tasks = [
  //   { Tasktitle: 'Task 1', Description: 'John Doe', Duedate: '2025-02-10', Status: 'In Progress', Priority: 'High' },
  //   { Tasktitle: 'Task 2', Description: 'Jane Smith', Duedate: '2025-02-15', Status: 'In Progress', Priority: 'Medium' },
  //   { Tasktitle: 'Task 3', Description: 'Robert Brown', Duedate: '2025-02-20', Status: 'Completed', Priority: 'Low' },
  //   { Tasktitle: 'Task 4', Description: 'Emily Johnson', Duedate: '2025-02-25', Status: 'Pending', Priority: 'High' }
  // ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = {
      Tasktitle: `Task ${this.taskId}`,
      Description: 'Sample Task Description',
      Duedate: '2024-02-15',
      Status: 'In Progress',
      Priority: 'High'
    };
  }
  saveChanges() {
    console.log('Updated Task:', this.task);
    alert('Task updated successfully!');
  }
  
}
