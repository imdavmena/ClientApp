import { Component, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-pie2d',
  templateUrl: './pie2d.component.html',
})
export class Pie2dComponent {
 @Input() dataSource: any;
 @Input() data: any;
 @Input() selectedSlice = 'none';
 @Input() chart: any;


  constructor(private zone: NgZone) { }

  ngOnInit(){
    this.dataSource = this.data;
  }
  // FusionCharts initialized listener to get the chart instance
  initialized($event: { chart: any }) {
    this.chart = $event.chart; // saving chart instance
  }

  // Get data item label
  getLabel(index: string | number) {
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event: any) {
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced
        ? 'none'
        : this.getLabel(dataIndex).toLowerCase();
    });
  }
}
