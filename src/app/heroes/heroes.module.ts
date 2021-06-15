import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // los exports significan que cosas quiero q sean visibles fuera d este modulo 
    exports: [
        ListadoComponent
    ],
    // dentro de imports van todos los modulos unicamente 
    imports: [
        // el common ofrece el poder usar ngfor y ngif 
        CommonModule
    ]
})
export class HeroesModule{}