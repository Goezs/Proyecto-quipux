import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    SidebarComponent,
    MateriasComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
