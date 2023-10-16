import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  elements = ["Estudiantes", "Grupos", "Materias",
   "Evaluaciones", "Informes"]
}
