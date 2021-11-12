import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/model/contract';
import { ContractorService } from 'src/app/services/contractor.service';

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css'],
})
export class UpdateContractComponent implements OnInit {
  contractId: number;
  contract: Contract;

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
    });
  }

  onClick() {
    this._route.navigate(['/add/contract-from']);
  }

  onUpdateContract = (contractForm: NgForm) => {
    this._contractorService.updateContract(contractForm.value).subscribe(
      (data: Contract) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
