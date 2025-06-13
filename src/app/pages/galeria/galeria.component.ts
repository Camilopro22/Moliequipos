import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Categoria = 'materiales' | 'maquinaria' | 'instalaciones';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GaleriaComponent {

  imagenes: { [key in Categoria]: { src: string; alt: string }[] } = {
    materiales: [
      { src: 'assets/acero.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/bronce.webp', alt: 'Imagen 2 de materiales' },
      { src: 'assets/chatarra.webp', alt: 'Imagen 3 de materiales' },
      { src: 'assets/cobre.avif', alt: 'Imagen 4 de materiales' },
      { src: 'assets/pet.avif', alt: 'Imagen 1 de materiales' },
      { src: 'assets/pote.avif', alt: 'Imagen 1 de materiales' },
      { src: 'assets/pasta.webp', alt: 'Imagen 1 de materiales' },
      { src: 'assets/pasta2.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/Chatarra2.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/paca.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/pet2.jpg', alt: 'Imagen 1 de materiales' },
    ],
    maquinaria: [
      { src: 'assets/maquina1.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina2.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina3.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina4.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina5.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina6.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina7.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/maquina8.jpg', alt: 'Imagen 1 de materiales' },
    ],
    instalaciones: [
      { src: 'assets/instalaciones1.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones2.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones3.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones4.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones5.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones6.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones7.jpg', alt: 'Imagen 1 de materiales' },
      { src: 'assets/instalaciones8.jpg', alt: 'Imagen 1 de materiales' },
    ],
  };

  categoriaSeleccionada: Categoria = 'materiales';
  modalAbierto = false;
  imagenModal: { src: string; alt: string } | null = null;

  seleccionarCategoria(categoria: Categoria) {
    this.categoriaSeleccionada = categoria;
  }

  abrirModal(imagen: { src: string; alt: string }) {
    this.imagenModal = imagen;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.imagenModal = null;
  }
}
