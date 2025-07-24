import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor } from './app/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimations(),
    provideAuth0({
      domain: 'dev-xwaoo8j0cgrz6l7z.us.auth0.com',
      clientId: 'uOiUZ4uAt1vwG4j9Mzp723WvAZVtRb4I', // <-- CORRECTION ICI
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
        audience: 'http://localhost:3000',
        scope: 'openid profile email'
      },
      httpInterceptor: {
        allowedList: [`http://localhost:3000/*`],
      },
    }),
  ],
});