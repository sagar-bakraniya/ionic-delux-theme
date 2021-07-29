import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [
    {
      image: '../../assets/img/giuseppe-argenziano-N5sIJrlECl8-unsplash.jpg',
      text: 'MANS',
    },

    {
      image: '../../assets/img/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg',
      text: 'WEDDING',
    },
    {
      image: '../../assets/img/hunters-race-MYbhN8KaaEc-unsplash (1).jpg',
      text: 'SHOES',
    },
    {
      image: '../../assets/img/olivia-bauso-30UOqDM5QW0-unsplash.jpg',
      text: 'RETRO',
    },

    {
      image:
        '../../assets/img/shardayyy-photography-fJzmPe-a0eU-unsplash (1).jpg',
      text: 'DESTINATION',
    },
    {
      image: '../../assets/img/alicia-petresc-BciCcl8tjVU-unsplash.jpg',
      text: 'JEANS',
    },
  ];

  selected = [];
  constructor() {}

  selecte(i: number) {
    if (this.selected.indexOf(i) > -1) {
      this.selected = this.selected.filter((x) => x !== i);
    } else {
      this.selected.push(i);
    }
  }
}
