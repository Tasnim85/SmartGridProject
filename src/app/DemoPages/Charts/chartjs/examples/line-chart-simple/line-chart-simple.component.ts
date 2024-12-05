import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart-simple',
  templateUrl: './line-chart-simple.component.html'
})
export class LineChartSimpleComponent implements OnInit {
  // Ne garder que la série 'Vibration'
  public lineChartData: ChartDataSets[] = [
    { data: Array.from({ length: 31 }, () => this.generateNumber(0)), label: 'Vibration' },
  ];

  // Remplacer les jours par les dates réelles
  public lineChartLabels: Label[] = this.generateLabels(); // Dates du mois

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Dates',
          },
          ticks: {
            callback: function (value) {
              return value; // Afficher les dates
            }
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
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
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bleu clair pour 'Vibration'
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}

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
    const newDate = new Date(this.lineChartLabels.length + 1);
    this.lineChartLabels.push(newDate.toISOString().split('T')[0]);
  }

  public changeColor() {
    this.lineChartColors[0].borderColor = 'green';
    this.lineChartColors[0].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }
}
