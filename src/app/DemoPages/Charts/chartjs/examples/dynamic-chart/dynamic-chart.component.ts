import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
})
export class DynamicChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}],
    },
  };

  // Remplace les jours par les dates du mois
  public barChartLabels: Label[] = this.generateLabels(); // Dates du mois
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.generateRandomData(31), label: 'Temperature' },
    { data: this.generateRandomData(31), label: 'Humidity' },
  ];

  constructor() {}

  ngOnInit() {}

  // Générer des données aléatoires pour 31 jours
  private generateRandomData(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

  // Générer les labels avec les dates du mois (format YYYY-MM-DD)
  private generateLabels(): Label[] {
    const labels = [];
    const today = new Date();
    for (let i = 1; i <= 31; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      labels.push(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
    }
    return labels;
  }

  // Events
  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
