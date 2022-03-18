import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import{ Nav } from"./nav";

@NgModule({
    declarations:[
        Nav,
    ],
    imports :[
        CommonModule,
    ],
    exports:[
        Nav,
    ],
})
export class UbudElementCommonNavComponentModule{}