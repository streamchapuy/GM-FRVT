import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BuscadorComponent } from "./buscador/buscador.component";
import { LogoNavComponent } from "./logo-nav/logo-nav.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
    declarations: [
        LogoNavComponent,
        NavComponent,
        BuscadorComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        LogoNavComponent,
        NavComponent,
        BuscadorComponent
    ]
})
export class HeaderLoggedModule { }