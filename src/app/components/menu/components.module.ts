import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [MenuComponent],
    exports: [MenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]
})

export class ComponentsModule { }