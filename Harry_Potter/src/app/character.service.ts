import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://potterapi-fedeperin.vercel.app/it/characters';  // URL della tua API

  constructor(private http: HttpClient) { }

  // Ottieni tutti i personaggi
  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ottieni un singolo personaggio per ID
  getCharacterById(id: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(characters => characters.find(character => character.id === id))  // Trova il personaggio con l'ID specificato
    );
  }
}
