import { Component } from '@angular/core';
import { SUBJECTS } from './content.mock-subject';
import { BASESUBJECTS} from './content.base-subject'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  baseSubjects = BASESUBJECTS;
  subjects = SUBJECTS;
  eyeImage = "../assets/icon/ic-show.svg";
  eyeAlt = "Ojo"; 
  deleteImage = "../assets/icon/ic-trash.svg";
  deleteAlt = "Borrar"
}
