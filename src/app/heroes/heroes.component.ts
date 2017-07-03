import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  title = "Eva's Tour of Heroes";
  heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.heroService = heroService;
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}