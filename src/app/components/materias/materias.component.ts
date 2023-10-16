import { Component } from '@angular/core';
import { BASECAMPS } from './materias.base-camps';
import { STUDENTS } from './materias.mock-students';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  baseCamps = BASECAMPS;
  students = STUDENTS
}
