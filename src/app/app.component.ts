import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreEmpresa = "Marketing Digital";
  titulo = "paquetes";
  fecha = new Date();

  paquetes = [
    {
      titulo: 'Básico', 
      precio: 100,
      mes: '/mes',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Diseño de imagen',
      d4: '-'
    },
    {
      titulo: 'Recomendado', 
      precio: 200,
      mes: 'mes',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Diseño de imagen',
      d4: 'Video'
    },
    {
      titulo: 'Profesional', 
      precio: 300,
      mes: 'mes',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Imagen/Video',
      d4: 'Community Manager'
    }
  ]

  menu = [
    "Este", "Menú", "se", "hizo", "con","*ngFor"
  ]
}
