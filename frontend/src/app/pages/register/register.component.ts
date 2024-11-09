import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { IRegister } from '../../interfaces/iregister'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: IRegister = {
    nombre: '',
    email: '',
    contrasena: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router, 
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  register() {
    // Validación básica en el frontend
    if (!this.user.email || !this.user.contrasena || !this.user.confirmPassword || !this.user.nombre) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.user.contrasena !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Verificar los datos que se envían
    console.log('Datos de usuario que se enviarán:', this.user);

    // Llamada al servicio de registro
    this.authService.register(this.user).subscribe(
      (response: any) => {        
          alert('Registro Exitoso');
          this.goToLogin();
       
      },
      (error: any) => {
        console.error('Error en el registro:', error);
        // Mostrar el mensaje de error proporcionado por el servidor
        if (error.status === 400 && error.error.message) {
          alert(`Error en el registro: ${error.error.message}`);
        } else {
          alert('Error en el registro');
        }
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
