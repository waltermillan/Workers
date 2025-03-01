import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';  // Asegúrate de importar conFetch
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoWorkerComponent } from './info-worker/info-worker.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { WorkerService } from './services/worker.service';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { DeleteWorkerComponent } from './delete-worker/delete-worker.component';
import { ListWorkersComponent } from './list-workers/list-workers.component'; // El servicio

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoWorkerComponent,
    NewWorkerComponent,
    UpdateWorkerComponent,
    DeleteWorkerComponent,
    ListWorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [
    [WorkerService],
    provideHttpClient(withFetch())  // Habilita fetch para HttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
