import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayedColumns: string[] = ['Id','Tasktitle', 'Description', 'Duedate','Status','Priority','Edit','Delete'];
  tasks = [
    { Id:1,Tasktitle: 1, Description: 'John Doe', Duedate: 'HR' , Status:'Inprogress', Priority:'high'},
    { Id:2,Tasktitle: 2, Description: 'Jane Smith', Duedate: 'Finance',Status:'Inprogress', Priority:'high' },
    { Id:3,Tasktitle: 3, Description: 'Robert Brown', Duedate: 'IT',Status:'Inprogress', Priority:'high' },
    { Id:4,Tasktitle: 4, Description: 'Emily Johnson', Duedate: 'Marketing,',Status:'Inprogress', Priority:'high' }
  ];

  onEditButtonClick(task: any){
    
  }
  onDeleteButtonClick(task:any) {

  }
}
 