import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormActivoComponent } from './form-activo/form-activo.component';
import { FormEdificioComponent } from './form-edificio/form-edificio.component';
import { FormPisoComponent } from './form-piso/form-piso.component';
import { FormSectorComponent } from './form-sector/form-sector.component';
import { FormTareasComponent } from './form-tareas/form-tareas.component';
import { FormUbicacionComponent } from './form-ubicacion/form-ubicacion.component';
import { FormulariosComponent } from './formularios.component';

@NgModule({
  declarations: [
    FormulariosComponent,
    FormActivoComponent,
    FormEdificioComponent,
    FormPisoComponent,
    FormSectorComponent,
    FormUbicacionComponent,
    FormTareasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormulariosComponent,
    FormActivoComponent,
    FormEdificioComponent,
    FormPisoComponent,
    FormSectorComponent,
    FormUbicacionComponent,
    FormTareasComponent,
  ]
})
export class FormulariosModule { }
