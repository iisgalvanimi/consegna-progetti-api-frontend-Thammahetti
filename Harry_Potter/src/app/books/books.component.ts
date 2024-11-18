import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {


  characters: any[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    
    this.characterService.getCharacters().subscribe(
      data => {
      
        this.characters = data;
      },
      error => {
        console.error('Errore nel recuperare i personaggi', error);
      }
    );
  }
}
