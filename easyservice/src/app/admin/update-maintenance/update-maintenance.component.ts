import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from 'src/app/model/maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-update-maintenance',
  templateUrl: './update-maintenance.component.html',
  styleUrls: ['./update-maintenance.component.css'],
})
export class UpdateMaintenanceComponent implements OnInit {
  maintenanceId: number;
  maintenance: Maintenance;

  constructor(
    private _maintenanceService: MaintenanceService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.maintenanceId = parseInt(map.get('id')))
    );

    this._maintenanceService
      .getMaintenanceById(this.maintenanceId)
      .subscribe((response) => {
        this.maintenance = response;
      });
  }

  onClick() {
    this._route.navigate(['/add/maintenance-form']);
  }

  onUpdateMaintenance = (maintenanceForm: NgForm) => {
    this._maintenanceService.updateMaintenance(maintenanceForm.value).subscribe(
      (data: Maintenance) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
