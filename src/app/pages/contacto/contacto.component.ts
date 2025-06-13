import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
contacto ={
  nombre: '',
  correo: '',
  mensaje: ''
}

constructor(private http: HttpClient) {}

enviarFormulario() {
  const url = 'http://localhost/moliequipos-backend/enviar-correo.php';

  this.http.post(url, this.contacto).subscribe({
    next: (respuesta: any) => {
      alert('Correo enviado correctamente');
      this.contacto = {
        nombre: '',
        correo: '',
        mensaje: '',
      };
    },
    error: () => {
      alert('Error al enviar el correo. Por favor, inténtelo de nuevo más tarde.');
    }
  });
}
}
