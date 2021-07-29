import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  assets = '../../../assets/img/';
  categories = [
    { image: this.assets + 'simon-migaj-Yui5vfKHuzs-unsplash.jpg', size: 12 , text: 'TRAVEL' , class : 'travel' },
    { image: this.assets + 'brooke-lark-HlNcigvUi4Q-unsplash.jpg', size: 6 ,text: 'FOOD' , class : 'food' },
    { image: this.assets + 'freestocks-spP6LqxN0-g-unsplash.jpg', size: 6 , text: 'DEALS' , class : 'food' },
    { image: this.assets + 'freestocks-_3Q3tsJ01nc-unsplash.jpg', size: 12 , text: 'FASHION' , class : 'fashon' },
  ];

  constructor(public menuController: MenuController) {}

  ngOnInit() {}
}
