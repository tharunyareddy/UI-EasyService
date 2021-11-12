import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Worker } from 'src/app/model/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.css'],
})
export class UpdateWorkerComponent implements OnInit {
  workerId: number;
  worker: Worker;

  constructor(
    private _workerService: WorkerService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.workerId = parseInt(map.get('id')))
    );

    this._workerService.getById(this.workerId).subscribe((response) => {
      this.worker = response;
    });
  }

  onClick() {
    this._route.navigate(['/add/worker-from']);
  }

  onUpdateWorker = (workerForm: NgForm) => {
    this._workerService.updateWorker(workerForm.value).subscribe(
      (data: Worker) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
