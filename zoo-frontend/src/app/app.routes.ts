import { Routes } from '@angular/router';
import { ListeAnimauxComponent } from './pages/liste-animaux/liste-animaux';
import { ListeHabitatsComponent } from './pages/liste-habitats/liste-habitats';

export const routes: Routes = [
  { path: 'animaux', component: ListeAnimauxComponent },
  { path: 'habitats', component: ListeHabitatsComponent },
  { path: '', redirectTo: '/animaux', pathMatch: 'full' },
];