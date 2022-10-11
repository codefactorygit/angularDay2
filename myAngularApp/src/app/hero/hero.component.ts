import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroTitle: string = 'Code Factory';
  heroInfo: string =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odio?';
  heroBtn: string = 'Learn more';
  heroUrl: string = 'https://codefactory.wien';
  constructor() {}

  ngOnInit(): void {}
}
