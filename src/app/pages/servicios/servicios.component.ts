import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  abrirWhatsapp() {
    const numero = '573216563803';
    const mensaje = encodeURIComponent("Hola buen día, estoy interesado en sus servicios, por favor me podrías brindar más información?");
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;
    window.open(url, '_blank');
}
}
