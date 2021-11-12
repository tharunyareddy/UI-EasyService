import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Maintenance } from 'src/app/model/maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css'],
})
export class MaintenanceFormComponent implements OnInit {
  maintenance: Maintenance;
  maintenances: Maintenance[];
  constructor(
    private _route: Router,
    private _maintenanceService: MaintenanceService
  ) {}

  ngOnInit(): void {
    this._maintenanceService.getAllMaintenance().subscribe(
      (maintenancesList) => {
        this.maintenances = maintenancesList;
        // console.log(maintenancesList)
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  onClick() {
    this._route.navigate(['/home']);
  }

  onAddMaintenance = (maintenanceForm: NgForm) => {
    this._maintenanceService.addMaintenance(maintenanceForm.value).subscribe(
      (data: Maintenance) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };

  onClickUpdate = (maintenance: Maintenance) => {
    this._route.navigate(['add/update-maintenance', maintenance.maintenanceId]);
  };
  onDeleteMaintenance = (maintenanceId: number) => {
    this._maintenanceService.deleteMaintenance(maintenanceId).subscribe(
      () => console.log('Deleted'),
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
