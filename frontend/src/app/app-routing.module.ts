import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component'; // Importa el componente InfoWorker
import { NewWorkerComponent } from './new-worker/new-worker.component';// Importa el componente InfoWorker

import { UpdateWorkerComponent } from './update-worker/update-worker.component'; // Importa el componente InfoWorker
import { DeleteWorkerComponent } from './delete-worker/delete-worker.component'; // Importa el componente InfoWorker

import { ListWorkersComponent } from './list-workers/list-workers.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info-worker', component: InfoWorkerComponent },
  { path: 'new-worker', component: NewWorkerComponent },
  { path: 'update-worker', component: UpdateWorkerComponent },
  { path: 'delete-worker', component: DeleteWorkerComponent },
  { path: 'list-workers', component: ListWorkersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
