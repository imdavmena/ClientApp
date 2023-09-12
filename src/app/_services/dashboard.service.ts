import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashBoardService {
  constructor(private http: HttpClient) {}

  getSympathizer() {
    return {
      chart: {
        caption: '',
        plottooltext: '<b>$percentValue</b>',
        showLegend: '0',
        showPercentValues: '1',
        useDataPlotColorForLabels: '1',
        enablemultislicing: '0',
        showlegend: '0',
        theme: 'fusion',
        captionPadding: '0px',
        chartLeftMargin: '0px',
      },
      data: [
        {
          label: 'Apache',
          value: '60',
          showLabel: '0',
          showValue: '0',
          color: '#FDE853',
        },
        {
          label: 'Microsoft',
          value: '10',
          showLabel: '0',
          showValue: '0',
          color: '#880A9D',
        },
        {
          label: 'Zeus',
          value: '30',
          showLabel: '0',
          showValue: '0',
          color: '#D9C6DC',
        },
      ],
    };
  }
}
