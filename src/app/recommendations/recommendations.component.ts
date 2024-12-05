import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.sass']
})
export class RecommendationsComponent implements OnInit {
  // Données dynamiques avec les trois niveaux possibles
  data = [
    { id: 54, message: "When near working machines, do not leave item/object that could interfere with the machine's operation", tag: 'tag 1', level: 'High' },
    { id: 55, message: 'When entering Bio digester zone, mask usage is advised due to gas hazard ', tag: 'tag 2', level: 'Medium' },
    { id: 56, message: 'Slight increase in humidity, Activating ventillation is recommended ', tag: 'tag 3', level: 'Low' },
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
