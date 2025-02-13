import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'edit-task/:id', component: EditTaskComponent } // Route with task ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
