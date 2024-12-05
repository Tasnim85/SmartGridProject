import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnInit {
  // Données dynamiques avec les trois niveaux possibles
  data = [
    { id: 54, message: ' Vibration Levels on Machine #X in area #Y, machine shutdown is dire', tag: 'tag2', level: 'High' },
    { id: 55, message: 'Machine #X in zone #Y has exceeded optimal operation time', tag: 'tag 4', level: 'Medium' },
    { id: 56, message: 'Carbon Monoxide Levels are high, Safety measures : Activating Ventilation Immediatly or leave the area ', tag: 'tag 1', level: 'Low' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Détermine la classe CSS du badge en fonction du niveau
  getBadgeClass(level: string): string {
    switch (level) {
      case 'Low':
        return 'bg-success'; // Vert
      case 'Medium':
        return 'bg-warning'; // Orange
      case 'High':
        return 'bg-danger'; // Rouge
      default:
        return 'bg-secondary'; // Gris par défaut
    }
  }
}
