import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

interface Habitat {
  id: number;
  nom: string;
  climat: string;
}

@Component({
  selector: 'app-liste-habitats',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './liste-habitats.html', // Correction du nom de fichier
})
export class ListeHabitatsComponent implements OnInit {
  habitats: Habitat[] = [];
  displayedColumns: string[] = ['nom', 'climat'];
  apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Habitat[]>(`${this.apiBaseUrl}/habitat`).subscribe(data => {
      this.habitats = data;
    });
  }
}