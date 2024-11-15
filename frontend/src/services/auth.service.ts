import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  register(user: any): Observable<any> {
    const registrationData = {
      nombre: user.nombre,
      email: user.email,
      contrasena: user.contrasena,
      
    };

    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/register`, registrationData, { headers: headers });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password: password }).pipe(
      map((response: any)=>{
        const token = response.user?.token;
        const tipo_usuario = response.user?.tipo_usuario;
        if(token){
          this.setToken(token);
          this.setUserRole(tipo_usuario);
        }
        return response;
      })
    );
  }
  setToken(token: string): void {
    this.cookieService.set('token', token, { path: '/', secure: true, sameSite: 'Strict' });
  }
  getToken(): string {
    return this.cookieService.get('token');
  }
  
  setUserRole(role: string): void {
    this.cookieService.set('userRole', role, { path: '/', secure: true, sameSite: 'Strict' });
  }
  
  getUserRole(): string {
    return this.cookieService.get('userRole');
  }
  
  logout(): void {
    this.cookieService.delete('token', '/');
    this.cookieService.delete('userRole', '/');
  }
}
