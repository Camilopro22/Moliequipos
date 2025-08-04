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


}
