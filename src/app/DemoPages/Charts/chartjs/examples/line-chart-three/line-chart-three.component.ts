import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart-three',
  templateUrl: './line-chart-three.component.html'
})
export class LineChartThreeComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: Array.from({ length: 31 }, () => this.generateNumber(0)), label: 'Voltage' },
    { data: Array.from({ length: 31 }, () => this.generateNumber(1)), label: 'Wattage' },
    { data: Array.from({ length: 31 }, () => this.generateNumber(2)), label: 'Amperage', yAxisID: 'y-axis-1' },
  ];

  // Remplacer les "Jour 1", "Jour 2", etc., par des dates réelles
  public lineChartLabels: Label[] = this.generateLabels();  // Dates du mois

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Jours',
          },
          ticks: {
            callback: function (value) {
              return value; // Les labels sont maintenant des dates réelles
            }
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '2024-12-15', // Annotation pour le 15 décembre
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu clair similaire pour le premier set
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)'
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Rouge clair pour le second set
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)'
    },
    {
      backgroundColor: 'rgba(201, 203, 207, 0.2)', // Gris clair pour le troisième set
      borderColor: 'rgba(201, 203, 207, 1)',
      pointBackgroundColor: 'rgba(201, 203, 207, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(201, 203, 207, 0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}

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

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Jour ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }
}
