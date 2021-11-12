import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maintenance } from 'src/app/model/maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { TaskService } from 'src/app/services/task.service';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css'],
})
export class AssignTaskComponent implements OnInit {
  maintenanceId: number;
  contractId: number;

  constructor(
    private _maintenanceService: MaintenanceService,
    private _taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onClickAssignMaintenance = (assignMaintenace: NgForm) => {
    //console.log(assignMaintenace.value);
    this._maintenanceService
      .assignMaitenanceToContract(
        assignMaintenace.value.maintenanceId,
        assignMaintenace.value.contractId
      )
      .subscribe(
        () => console.log('Assigned Contract To Maintenance'),
        (error) => console.log(error),
        () => console.log('completed')
      );
  };

  onClickAssignTask = (assignTask: NgForm) => {
    console.log(assignTask.value);
    this._taskService
      .assignTaskToMaintenance(
        assignTask.value.maintenanceId,
        assignTask.value.taskId
      )
      .subscribe(
        () => console.log('Assigned Mainteance To Task'),
        (error) => console.log(error),
        () => console.log('completed')
      );
  };

  onClickAssignWorker = (assignWorker: NgForm) => {
    console.log(assignWorker.value);
    this._taskService
      .assignTaskToWorker(
        assignWorker.value.workerId,
        assignWorker.value.taskId
      )
      .subscribe(
        () => console.log('Assigned Task To Worker'),
        (error) => console.log(error),
        () => console.log('completed')
      );
  };
}
