import { Component, OnInit, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  username: string | undefined;
  backendUrl = 'http://localhost:3000';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user: User | null | undefined) => {
      this.username = user?.name;
    });
  }

  // La méthode qui manquait est ajoutée ici
  testCallApi() {
    this.auth.getAccessTokenSilently().subscribe(token => {
      console.log('--- VOTRE TOKEN UTILISATEUR ---');
      console.log(token);
      console.log('------------------------------');
    });
  }
}