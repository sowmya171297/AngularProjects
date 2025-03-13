import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'add-task', component: AddTaskComponent } // Route with task ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
