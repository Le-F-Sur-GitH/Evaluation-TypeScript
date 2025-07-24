import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AjoutAnimalDialogComponent } from '../../components/ajout-animal-dialog/ajout-animal-dialog';
import { AnimalDto } from '../../dto/animal.dto';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-liste-animaux',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './liste-animaux.html',
})
export class ListeAnimauxComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'espece', 'age', 'actions'];
  dataSource = new MatTableDataSource<AnimalDto>();
  apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.chargerAnimaux();
  }

  chargerAnimaux(): void {
    this.http.get<AnimalDto[]>(`${this.apiBaseUrl}/animaux`).subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ajouterAnimal(): void {
    const dialogRef = this.dialog.open(AjoutAnimalDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.post<AnimalDto>(`${this.apiBaseUrl}/animaux`, result).subscribe(() => {
          this.chargerAnimaux();
        });
      }
    });
  }

  relacherAnimal(id: number): void {
    this.http.delete(`${this.apiBaseUrl}/animaux/${id}`).subscribe(() => {
      this.chargerAnimaux();
    });
  }
}