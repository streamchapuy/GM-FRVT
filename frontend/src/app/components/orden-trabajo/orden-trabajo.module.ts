import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtComponent } from './ot/ot.component';
import { OtBannerComponent } from './ot-banner/ot-banner.component';
import { OtTituloBannerComponent } from './ot-titulo-banner/ot-titulo-banner.component';
import { OtLogoBannerComponent } from './ot-logo-banner/ot-logo-banner.component';
import { OtCategoriasBannerComponent } from './ot-categorias-banner/ot-categorias-banner.component';
import { OtBannerLaborComponent } from './ot-banner-labor/ot-banner-labor.component';
import { OtInstruccionesBannerComponent } from './ot-instrucciones-banner/ot-instrucciones-banner.component';
import { OtBannerFechaComponent } from './ot-banner-fecha/ot-banner-fecha.component';
import { OtTituloComponent } from './ot-titulo-banner/ot-titulo/ot-titulo.component';
import { OtLogoComponent } from './ot-logo-banner/ot-logo/ot-logo.component';
import { OtInfoNComponent } from './ot-categorias-banner/ot-info-n/ot-info-n.component';
import { OtInfoCodigoComponent } from './ot-categorias-banner/ot-info-codigo/ot-info-codigo.component';
import { OtInfoActivoComponent } from './ot-categorias-banner/ot-info-activo/ot-info-activo.component';
import { OtInfoEdificioComponent } from './ot-categorias-banner/ot-info-edificio/ot-info-edificio.component';
import { OtInfoPisoComponent } from './ot-categorias-banner/ot-info-piso/ot-info-piso.component';
import { OtInfoSectorComponent } from './ot-categorias-banner/ot-info-sector/ot-info-sector.component';
import { OtLaborComponent } from './ot-banner-labor/ot-labor/ot-labor.component';
import { OtInstruccionesTituloComponent } from './ot-instrucciones-banner/ot-instrucciones-titulo/ot-instrucciones-titulo.component';
import { OtTareasListaComponent } from './ot-instrucciones-banner/ot-tareas-lista/ot-tareas-lista.component';
import { OtBanerFechachicaComponent } from './ot-banner-fecha/ot-baner-fechachica/ot-baner-fechachica.component';
import { OtInfoFechaComponent } from './ot-banner-fecha/ot-info-fecha/ot-info-fecha.component';
import { OtComentariosComponent } from './ot-comentarios/ot-comentarios.component';
import { OtComentariosQrComponent } from './ot-comentarios/ot-comentarios-qr/ot-comentarios-qr.component';



@NgModule({
  declarations: [
    OtComponent,
    OtBannerComponent,
    OtTituloBannerComponent,
    OtLogoBannerComponent,
    OtCategoriasBannerComponent,
    OtBannerLaborComponent,
    OtInstruccionesBannerComponent,
    OtBannerFechaComponent,
    OtTituloComponent,
    OtLogoComponent,
    OtInfoNComponent,
    OtInfoCodigoComponent,
    OtInfoActivoComponent,
    OtInfoEdificioComponent,
    OtInfoPisoComponent,
    OtInfoSectorComponent,
    OtLaborComponent,
    OtInstruccionesTituloComponent,
    OtTareasListaComponent,
    OtBanerFechachicaComponent,
    OtInfoFechaComponent,
    OtComentariosComponent,
    OtComentariosQrComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdenTrabajoModule { }
