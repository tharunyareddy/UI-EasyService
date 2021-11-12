import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from '../model/maintenance';
import { MaintenanceService } from '../services/maintenance.service';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css'],
})
export class MaintenanceDetailsComponent implements OnInit {
  maintenanceId: number;
  maintenance: Maintenance;
  taskList: any;
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
        console.log(this.maintenance);
      });
  }
}
