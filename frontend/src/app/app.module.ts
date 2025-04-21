import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component';
import { FormsModule } from '@angular/forms'; 
import { WorkerService } from './services/worker.service';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { HomeComponent } from './home/home.component'; 

import { SuccessDialogComponent } from './modals/success-dialog/success-dialog.component';
import { FailureDialogComponent } from './modals/failure-dialog/failure-dialog.component';
import { WarningDialogComponent } from './modals/warning-dialog/warning-dialog.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { NewCategoryComponent } from './new-category/new-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoWorkerComponent,
    NewWorkerComponent,
    UpdateWorkerComponent,
    ListWorkersComponent,
    HomeComponent,
    SuccessDialogComponent,
    FailureDialogComponent,
    WarningDialogComponent,
    ListCategoriesComponent,
    UpdateCategoryComponent,
    NewCategoryComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    [WorkerService],
    provideHttpClient(withFetch()) 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
