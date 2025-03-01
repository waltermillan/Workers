import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { AppInfoComponent } from './app-info/app-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info-worker', component: InfoWorkerComponent },
  { path: 'new-worker', component: NewWorkerComponent },
  { path: 'update-worker', component: UpdateWorkerComponent },
  { path: 'list-workers', component: ListWorkersComponent },
  { path: 'app-Info', component: AppInfoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
