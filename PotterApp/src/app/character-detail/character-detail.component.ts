import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: any; // Dettagli del personaggio corrente
  allCharacters: any[] = []; // Lista di tutti i personaggi

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    // Sottoscrivi ai cambiamenti dei parametri della rotta
    this.route.params.subscribe((params) => {
      const characterId = params['id'];
      this.loadCharacter(characterId);
    });

    // Carica tutti i personaggi
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.allCharacters = data;
      },
      error: (err) => {
        console.error('Errore durante il caricamento dei personaggi:', err);
      },
    });
  }

  private loadCharacter(characterId: string): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.character = data.find((c) => c.index.toString() === characterId);
      },
      error: (err) => {
        console.error('Errore durante il caricamento del personaggio:', err);
      },
    });
  }
}
