import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { NewCategoryComponent } from './new-category/new-category.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info-worker', component: InfoWorkerComponent },
  { path: 'new-worker', component: NewWorkerComponent },
  { path: 'update-worker', component: UpdateWorkerComponent },
  { path: 'list-workers', component: ListWorkersComponent },
  { path: 'list-categories', component: ListCategoriesComponent },
  { path: 'update-category', component: UpdateCategoryComponent },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
