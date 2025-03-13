import { Component } from '@angular/core';
import { Task, TaskDetailsService } from './services/task-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns: string[] = ['Id','Tasktitle', 'Description', 'Duedate','Status','Priority','Edit','Delete'];


  tasks: Task[] = [];
  

  constructor(private taskService: TaskDetailsService, private route:Router) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    console.log(id ,"deleted")
  }
  onEditButtonClick(task: any){
    
  }
  addTask(){
    

    this.route.navigate(['/add-task']);
  }
}
 