import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatFormFieldModule, MatCardModule, MatInputModule,
         MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatMenuModule,
         MatTabsModule, MatDatepickerModule, MatNativeDateModule,
         MatGridListModule
       } from '@angular/material';
import { ProfesionalManagerComponent } from './profesional/profesional-manager/profesional-manager.component';
import { ProfesionalListComponent } from './profesional/profesional-list/profesional-list.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { ProfesionalEditComponent } from './profesional/profesional-edit/profesional-edit.component';
import { EspecialidadManagerComponent } from './especialidad/especialidad-manager.component';
import { AsistenciasManagerComponent } from './asistencias-manager/asistencias-manager.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsejeriaManagerComponent } from './consejeria/consejeria-manager/consejeria-manager.component';
import { ConsejeriaEditComponent } from './consejeria/consejeria-edit/consejeria-edit.component';
import { ConsejeriaListComponent } from './consejeria/consejeria-list/consejeria-list.component';
import { ConsejeriaItemComponent } from './consejeria/consejeria-item/consejeria-item.component';
import { AntecedenteComponent } from './consejeria/antecedente/antecedente.component';
import { UsuariaComponent } from './consejeria/usuaria/usuaria.component';
import { GestaActualComponent } from './consejeria/gesta-actual/gesta-actual.component';
import { EstudioComplementarioComponent } from './consejeria/estudio-complementario/estudio-complementario.component';
import { EntrevistaPostComponent } from './consejeria/entrevista-post/entrevista-post.component';
import { EspecialidadListComponent } from './especialidad/especialidad-list/especialidad-list.component';
import { EspecialidadEditComponent } from './especialidad/especialidad-edit/especialidad-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    ProfesionalManagerComponent,
    ProfesionalListComponent,
    FilterBoxComponent,
    ProfesionalEditComponent,
    EspecialidadManagerComponent,
    AsistenciasManagerComponent,
    ConsejeriaManagerComponent,
    ConsejeriaEditComponent,
    ConsejeriaListComponent,
    ConsejeriaItemComponent,
    AntecedenteComponent,
    UsuariaComponent,
    GestaActualComponent,
    EstudioComplementarioComponent,
    EntrevistaPostComponent,
    EspecialidadListComponent,
    EspecialidadEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule, 
    RouterModule.forRoot([
      { path: 'profesionales/:id', component: ProfesionalEditComponent},
      { path: 'profesionales' , component: ProfesionalManagerComponent},
      { path: 'consejerias/:id', component: ConsejeriaEditComponent},
      { path: 'consejerias' , component: ConsejeriaManagerComponent},
      { path: 'especialidades' , component: EspecialidadManagerComponent},
      { path: 'especialidades/:id', component: EspecialidadEditComponent},
      { path: 'asistencias' , component: AsistenciasManagerComponent},
      { path: '',  redirectTo: '/profesionales', pathMatch: 'full' },
      { path: '**',  redirectTo: '/profesionales', pathMatch: 'full' },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
