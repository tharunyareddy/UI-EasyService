import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _baseurl = 'http://localhost:9000/task-service';

  constructor(private _http: HttpClient) {}

  getAllTask(): Observable<Task[]> {
    let url = this._baseurl + '/task';
    return this._http.get<Task[]>(url);
  }

  getById(taskId: number): Observable<Task> {
    let url = this._baseurl + '/task/taskId/' + taskId;
    return this._http.get<Task>(url);
  }

  addTask(task: Task): Observable<Task> {
    let url = this._baseurl + '/task';
    const body = JSON.stringify(task);
    console.log(body);
    return this._http.post<Task>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }

  updateTask(task: Task): Observable<Task> {
    let url = this._baseurl + '/task';
    const body = JSON.stringify(task);
    return this._http.put<Task>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }

  deleteTask(taskId: number): Observable<any> {
    let url = this._baseurl + '/task/taskId/' + taskId;
    return this._http.delete(url);
  }

  assignTaskToMaintenance(
    maintenaceId: number,
    taskId: number
  ): Observable<any> {
    // http://localhost:8072/task-service/task/maintenaceId/111/taskId/201
    let url =
      this._baseurl +
      '/task/maintenaceId/' +
      maintenaceId +
      '/taskId/' +
      taskId;
    return this._http.get(url);
  }

  assignTaskToWorker(workerId: number, taskId: number): Observable<any> {
    // http://localhost:8072/task-service/task/workerId/301/taskId/201
    let url =
      this._baseurl + '/task/workerId/' + workerId + '/taskId/' + taskId;
    return this._http.get(url);
  }
}
