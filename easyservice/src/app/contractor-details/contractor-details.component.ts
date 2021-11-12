import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../model/contract';
import { ContractorService } from '../services/contractor.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css'],
  providers: [],
})
export class ContractorDetailsComponent implements OnInit {
  contractId: number;
  contract: Contract;
  maintenanceList: any;
  constructor(
    private _contractorService: ContractorService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.contractId = parseInt(map.get('id')))
    );

    this._contractorService.getById(this.contractId).subscribe((response) => {
      this.contract = response;
      console.log(this.contract);
    });
  }

  // getMaintenanceDetails(contractId: Contract) {
  //   console.log(contractId);
  //   this._contractorService
  //     .getMaintenanceByContractId(contractId)
  //     .subscribe((response) => {
  //       this.maintenanceList = response;
  //       console.log(this.maintenanceList);
  //     });
  // }
}
