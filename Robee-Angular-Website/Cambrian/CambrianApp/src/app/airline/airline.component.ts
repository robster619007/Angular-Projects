import { Component, OnInit } from '@angular/core';
import { CambrianServiceService } from '../cambrian-service.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  public cambrian = [];
  public airlineName = '';
  // tslint:disable-next-line:variable-name
  constructor(private _cambrianService: CambrianServiceService) { }

  ngOnInit() {
    this.cambrian = this._cambrianService.getCambrian();
  }

}
