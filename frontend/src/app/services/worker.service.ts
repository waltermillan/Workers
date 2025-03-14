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

  
  // Get a Worker by ID
  getWorker(id:number): Observable<Worker>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Worker>(url);
  }

  // Get all Workers
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.apiUrl}`);
  }

  // Get for add Workers
  addWorker(worker: Worker): Observable<Worker> {
    const url =`${this.apiUrl}`;
    return this.http.post<Worker>(url, worker);
  }

  // Update a Worker
  updateWorker(worker: Worker, id:number): Observable<Worker> {
    const url =`${this.apiUrl}/${id}`;
    return this.http.put<Worker>(url, worker)
  }

  // Delete a Worker by ID
  deleteWorker(id:number): Observable<Worker> {
    const url =`${this.apiUrl}/${id}`;
    return this.http.delete<Worker>(url)
  }
}
