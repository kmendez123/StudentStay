import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zHotel';

  constructor(private authService: AuthService) {
    try {
      if (typeof localStorage !== 'undefined') {
        this.authService.loadUserFromLocalStorage();
      } else {
        //console.error('localStorage no está disponible en este entorno.');
      }
    } catch (error) {
      //console.error('Ocurrió un error:', error);
      throw new Error('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
    }



  }

  usuario() {
    return this.authService.tipoUser
  }

  footer() {
    return this.authService.isLoggedIn
  }
}

