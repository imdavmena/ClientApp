import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pie2d',
  templateUrl: './card-pie2d.component.html',
})
export class CardPie2dComponent {
  @Input() dataSource: any;
  @Input() title: string = 'Simpatizante';
  @Input() list: [{}] = [
    {
      dot: 'dot-success',
      num: 3,
      txt: 'Relacionados registrados',
    },
  ];
}
