import { Hero } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  // ici varible de class
  heroes: Hero[] = [];
  heroToAdd = ' ';
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  addHero() {
    // on rajoute heroName au heroes de notre class
    // ici this = a toute la class

    // if(this.heroToAdd.length> 0){
    // if(this.heroToAdd){

    if (this.heroToAdd.trim().length > 0) {
      // .trim() enleve les espaces au debut et la fin
      // ex si
      // heroToAdd.trim() ='         coucou       '
      // alors heroToAdd.trim()='coucou'

      // ici la longueur du heroToAdd doit etre supperieur a 0

      this.heroes.push(this.heroesService.createHero(this.heroToAdd));

      this.heroToAdd = '';

      // pour le remettre a zero apres avoir validé
    } else {
      alert(' veuillez entrez un nom');
    }
  }
  // fonction dans class = methode
  // ici on donne une annotation
}
