import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { DashBoardService } from '@app/_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  loading = false;
  sympathizerData: any;

  constructor(private dashboard: DashBoardService) {
    this.sympathizerData = this.dashboard.getSympathizer();
  }
  ngOnInit() {
   
    this.loading = true;
  }
}
