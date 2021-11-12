import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMaintenanceComponent } from './update-maintenance/update-maintenance.component';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    LoginComponent,
    AddComponent,
    ContractFormComponent,
    MaintenanceFormComponent,
    TaskFormComponent,
    WorkerFormComponent,
    UpdateContractComponent,
    UpdateMaintenanceComponent,
    UpdateWorkerComponent,
    UpdateTaskComponent,
    AssignTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    MatTabsModule,
  ],
})
export class AdminModule {}
