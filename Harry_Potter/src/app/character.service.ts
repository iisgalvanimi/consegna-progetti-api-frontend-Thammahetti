import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://potterapi-fedeperin.vercel.app/it/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
