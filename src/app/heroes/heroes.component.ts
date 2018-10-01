import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() 
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessagesService) { 
  }
  onSelect(hero: Hero): boolean {
    this.selectedHero = hero;
    this.messageService.add('Selected a hero at ' + new Date());
    return true;
  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes=heroes);
  }
}
