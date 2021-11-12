import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { UpdateMaintenanceComponent } from './update-maintenance/update-maintenance.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';

const routes: Routes = [
  { path: 'admin/add', component: AddComponent },
  { path: 'add/contract-form', component: ContractFormComponent },
  { path: 'add/maintenance-form', component: MaintenanceFormComponent },
  { path: 'add/task-form', component: TaskFormComponent },
  { path: 'add/worker-form', component: WorkerFormComponent },
  { path: 'add/update-contract/:id', component: UpdateContractComponent },
  { path: 'add/update-maintenance/:id', component: UpdateMaintenanceComponent },
  { path: 'add/update-worker/:id', component: UpdateWorkerComponent },
  { path: 'add/update-task/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
