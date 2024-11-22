
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent  implements OnInit  {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del personaggio:', id);  // Aggiungi un log per verificare l'ID
    if (id) {
      this.characterService.getCharacterById(id).subscribe(
        data => {
          console.log('Dettagli del personaggio:', data);  // Aggiungi un log per verificare i dati
          this.character = data;
        },
        error => {
          console.error('Errore nel recuperare i dettagli del personaggio', error);
        }
      );
    }
  }
  
}
