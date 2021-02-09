import { Component, OnInit } from '@angular/core';
import { SidebarSection } from './model/sidebar-section';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sections: SidebarSection[] = [
    {
      headerText: 'FICHAS',
      isExpanded: true,
      groups: [
        {
          name: 'D&D',
          content: ['Carlos Magno', 'Muriel']
        },
        {
          name: 'FATE',
          content: ['Chico Bruno', 'Dremmor', 'Arthur']
        }
      ]
    },
    {
      headerText: 'IMAGENS',
      isExpanded: true,
      groups: [
        {
          name: 'PokeUESC',
          content: ['Pikachu capiroto', 'NPC 1']
        },
        {
          name: 'Usar algum dia',
          content: ['Biel desenho', 'Paladino cyberpunk']
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
