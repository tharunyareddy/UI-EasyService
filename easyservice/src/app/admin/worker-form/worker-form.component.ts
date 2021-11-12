import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from 'src/app/model/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  worker: Worker;
  workers:Worker[] = [];
  constructor(private _route: Router, private _workerService: WorkerService) {}

  ngOnInit(): void {
    this._workerService.getAllWorkers().subscribe(
      (workersList) => {
        this.workers = workersList;
        console.log(workersList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  onClick(){
    this._route.navigate(['/home']);
  }
  onClickUpdate = (worker: Worker) => {
    this._route.navigate(['add/update-worker', worker.workerId]);
  };
  onAddWorker = (workerForm: NgForm) => {
    this._workerService.addWorker(workerForm.value).subscribe(
      (data: Worker) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
