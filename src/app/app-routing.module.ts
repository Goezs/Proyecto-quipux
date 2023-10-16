import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent} from './components/content/content.component';
import { ModalComponent} from './components/modal/modal.component';
import { MateriasComponent } from './components/materias/materias.component';


const routes: Routes = [
  { path: 'materias', component: MateriasComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'content', component: ContentComponent},
  { path: '', redirectTo: '/content', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
