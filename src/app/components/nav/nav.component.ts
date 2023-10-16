import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  quipuxLogo: string = "../assets/img/quipuxLogo.png";
  altQuipuxLogo: string = "Logo de quipux"
  personName: string = 'Carolina Fernández Echeverry';
  personImage: string = "../assets/img/person.png"
  altPersonImage: string = "Persona"


}
