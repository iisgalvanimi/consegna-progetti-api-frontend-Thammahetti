import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component'; // il componente che visualizza la lista
import { CardDetailComponent } from './card-detail/card-detail.component';
const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: CardDetailComponent },  // Imposta la rotta dinamica per l'ID
  { path: '', redirectTo: '/books', pathMatch: 'full' }  // Impostazione della rotta predefinita
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
