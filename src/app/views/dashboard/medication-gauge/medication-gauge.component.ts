import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'medication-gauge',
  templateUrl: './medication-gauge.component.html',
  styleUrls: ['./medication-gauge.component.scss']
})
export class MedicationGaugeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = ['Не принял', 'Принял', 'Принял 50%'];
  public doughnutChartData = [1, 1, 1, 1, 1, 1, 1] ;
  public doughnutChartColors = [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384"
  ];
  public doughnutChartType = 'doughnut';
  public options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  }
  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
