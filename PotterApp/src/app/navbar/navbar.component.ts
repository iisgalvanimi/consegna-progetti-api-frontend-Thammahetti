import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  characters: any[] = []; // Lista dei personaggi

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    // Recupera i personaggi dalla API
    this.characterService.getCharacters().subscribe((data: any[]) => {
      this.characters = data.slice(0, 5); // Prendi solo i primi 5 personaggi
    });
  }
}
