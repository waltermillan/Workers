import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker.model';
import { WorkerDTO } from '../models/worker-dto.model';
import { GLOBAL } from '../configuration/configuration.global';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  endpoint: string = 'workers';

  constructor(private http: HttpClient) {}

  // Get all Workers
  getWorkers(useDto = false): Observable<Worker[]> {
    const dtoPath = useDto ? `/dto` : '';
    return this.http.get<Worker[]>(
      `${GLOBAL.apiBaseUrl}/${this.endpoint}${dtoPath}`
    );
  }

  // Get a Worker by ID
  getWorker(id: number): Observable<Worker> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/${id}`;
    return this.http.get<Worker>(url);
  }

  // Get a Worker by ID [dto]
  getWorkerDto(id: number): Observable<WorkerDTO> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/dto${id}`;
    return this.http.get<WorkerDTO>(url);
  }

  // Get all Workers [dto]
  getWorkersDto(): Observable<WorkerDTO[]> {
    return this.http.get<WorkerDTO[]>(
      `${GLOBAL.apiBaseUrl}/${this.endpoint}/dto`
    );
  }

  // Get for add Workers
  addWorker(worker: Worker): Observable<Worker> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}`;
    return this.http.post<Worker>(url, worker);
  }

  // Update a Worker
  updateWorker(worker: Worker, id: number): Observable<Worker> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/${id}`;
    return this.http.put<Worker>(url, worker);
  }

  // Delete a Worker by ID
  deleteWorker(id: number): Observable<Worker> {
    const url = `${GLOBAL.apiBaseUrl}/${this.endpoint}/${id}`;
    return this.http.delete<Worker>(url);
  }
}
