import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MoliequiposWeb';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    // Ejecuta este bloque solo si estamos en el navegador
       if (isPlatformBrowser(this.platformId)) {
      const toggleButton = this.document.getElementById('menuToggle');
      const menuList = this.document.getElementById('menuList');

      toggleButton?.addEventListener('click', () => {
        menuList?.classList.toggle('show');
      });

      const links = menuList?.querySelectorAll('a');
      links?.forEach(link => {
        link.addEventListener('click', () => {
          menuList?.classList.remove('show');
        });
      });
    }
  }
}
