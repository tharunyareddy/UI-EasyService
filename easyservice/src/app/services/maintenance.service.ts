import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenance } from '../model/maintenance';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  private _baseurl = 'http://localhost:9000/maintenance-service';

  constructor(private _http: HttpClient) {}

  getAllMaintenance(): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenance';
    return this._http.get<Maintenance[]>(url);
  }

  getMaintenanceById(maintenanceId: number): Observable<Maintenance> {
    let url = this._baseurl + '/maintenance/maintenanceId/' + maintenanceId;
    return this._http.get<Maintenance>(url);
  }

  getMaintenancesByStatus(mStatus: Status): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenanceStatus/' + mStatus;
    return this._http.get<Maintenance[]>(url);
  }

  getMaintenancesByPriority(mPriority: Priority): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenancePriority/' + mPriority;
    return this._http.get<Maintenance[]>(url);
  }

  addMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    let url = this._baseurl + '/maintenance';
    // const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(maintenance);
    console.log(body);
    return this._http.post<Maintenance>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }

  updateMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    let url = this._baseurl + '/maintenance';
    const body = JSON.stringify(maintenance);
    console.log(body);
    return this._http.put<Maintenance>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }

  deleteMaintenance(maintenanceId: number): Observable<any> {
    let url = this._baseurl + '/maintenance/maintenanceId/' + maintenanceId;
    return this._http.delete(url);
  }

  assignMaitenanceToContract(maintenanceId:number,contractId:number):Observable<any>{
    // http://localhost:8071/maintenance-service/maintenance/maintenanceId/111/contractId/17
     let url = this._baseurl + '/maintenance/maintenanceId/' + maintenanceId + '/contractId/'+ contractId;
     return this._http.get(url);
  }

}
