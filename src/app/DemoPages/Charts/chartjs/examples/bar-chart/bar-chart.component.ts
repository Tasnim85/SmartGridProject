import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
  };

  // Remplacer les "Jour 1", "Jour 2", etc., par des dates réelles
  public barChartLabels: Label[] = this.generateLabels();  // Dates du mois

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  // Définition des données et couleurs
  public barChartData: ChartDataSets[] = [
    {
      data: [28, 48, 40, 19, 86, 27, 90, 50, 60, 45, 70, 85, 90, 76, 43, 67, 89, 52, 44, 60, 75, 88, 61, 72, 80, 55, 91, 49, 40, 65, 59],
      label: 'Temperature',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Couleur de fond de base
      borderColor: 'rgba(0, 123, 255, 1)',  // Bordure bleue
      borderWidth: 1,
      // Couleur au survol (bleu foncé)
      hoverBackgroundColor: 'rgba(0, 123, 255, 0.4)',  // Bleu foncé au survol
      hoverBorderColor: 'rgba(0, 123, 255, 1)',  // Bordure bleue au survol
    }
  ];

  constructor() { }

  ngOnInit() { }

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

  // événements
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      48,
      40,
      (Math.random() * 100),
      86,
      (Math.random() * 100),
      90, 50, 60, 45, 70, 85, 90, 76, 43, 67, 89, 52, 44, 60, 75, 88, 61, 72, 80, 55, 91, 49, 40, 65, 59];
    this.barChartData[0].data = data;
  }
}
