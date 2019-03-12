import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

 private heroes: Hero[] = [
    {id: 1, name: 'superman'},
    {id: 2, name: 'batman'},
    {id: 3, name: 'wonderwoman'},
    {id: 4, name: 'spiderman'},
    {id: 5, name: 'ironman'}
  ];
idToGenerate: number = this.heroes.length + 1;
getHeroes() {
  return this.heroes;
}
createHero(name: string) {
  return {id: this.idToGenerate++ , name};
}
}
