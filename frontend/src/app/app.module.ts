import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component';
import { FormsModule } from '@angular/forms'; 
import { WorkerService } from './services/worker.service';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { AppInfoComponent } from './app-info/app-info.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoWorkerComponent,
    NewWorkerComponent,
    UpdateWorkerComponent,
    ListWorkersComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [
    [WorkerService],
    provideHttpClient(withFetch()) 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
