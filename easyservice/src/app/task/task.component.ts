import { Component, OnInit } from '@angular/core';
import { Worker } from '../model/worker';
import { Contract } from '../model/contract';
import { Maintenance } from '../model/maintenance';
import { Task } from '../model/task';
import { ContractorService } from '../services/contractor.service';
import { MaintenanceService } from '../services/maintenance.service';
import { TaskService } from '../services/task.service';
import { WorkerService } from '../services/worker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  contracts: Contract[];
  maintenances: Maintenance[];
  maintenanceTaskList: Maintenance;
  maintenanceId: number;
  tasks: Task[];
  workers: Worker[] = [];
  constructor(
    private contractorService: ContractorService,
    private maintenanceService: MaintenanceService,
    private taskService: TaskService,
    private workerService: WorkerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contractorService.getAllContracts().subscribe(
      (contractsList) => {
        this.contracts = contractsList; // console.log(contractsList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
    this.maintenanceService.getAllMaintenance().subscribe(
      (maintenancesList) => {
        this.maintenances = maintenancesList;
        console.log(maintenancesList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
    this.taskService.getAllTask().subscribe(
      (tasksList) => {
        this.tasks = tasksList;
        console.log(tasksList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
    this.workerService.getAllWorkers().subscribe(
      (workersList) => {
        this.workers = workersList;
        // console.log(workersList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );

    // this.activatedRoute.paramMap.subscribe(
    //   (map) => (this.maintenanceId = parseInt(map.get('id')))
    // );

    // this.maintenanceService
    //   .getMaintenanceById(this.maintenanceId)
    //   .subscribe((response) => {
    //     this.maintenanceTaskList = response;
    //     // console.log(this.maintenanceTaskList);
    //   });
  }
}
