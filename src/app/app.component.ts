import { Component } from '@angular/core';





@Component({//nom de la caracterisation
  selector: 'app-root', //nom de la balise
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//dans un tableau car il ya la possiblitée d'en avoir plusieurs
})
export class AppComponent {
  heroes = [
    'superman',
    'batman',
    'wonderwoman',
    'spiderman',
    'ironman'
  ];
  name=" ";
  heroToAdd=" ";
  addHero(){
    
    //on rajoute heroName au heroes de notre class
    // ici this = a toute la class
    
    //if(this.heroToAdd.length> 0){
    // if(this.heroToAdd){
   
    if(this.heroToAdd.trim().length> 0){
      //.trim() enleve les espaces au debut et la fin
      //ex si 
      //heroToAdd.trim() ='         coucou       '
      //alors heroToAdd.trim()='coucou'
     
      //ici la longueur du heroToAdd doit etre supperieur a 0
this.heroes.push(this.heroToAdd.trim());

this.heroToAdd=" ";
//pour le remettre a zero apres avoir validé
;

    }
    else {
      alert('veuillez entrez un nom');
    }



  };
  //fonction dans class = methode
  //ici on donne une annotation
}
