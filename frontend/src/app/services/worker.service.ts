import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private apiUrl = 'http://localhost:5184/api/workers';

  constructor(private http: HttpClient) { }

  getWorker(id:number): Observable<Worker>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Worker>(url);
  }

  // Método para obtener los trabajadores
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.apiUrl}`);
  }

  // Método para agregar un nuevo trabajador
  addWorker(worker: Worker): Observable<Worker> {
    const url =`${this.apiUrl}`;
    return this.http.post<Worker>(url, worker);
  }

  // Método para actualiar un trabajador
  updateWorker(worker: Worker, id:number): Observable<Worker> {
    const url =`${this.apiUrl}/${id}`;
    return this.http.put<Worker>(url, worker)
  }

  // Método para borrar un trabajador
  deleteWorker(id:number): Observable<Worker> {
    const url =`${this.apiUrl}/${id}`;
    return this.http.delete<Worker>(url)
  }
}
