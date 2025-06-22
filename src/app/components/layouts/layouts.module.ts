import { NgModule } from "@angular/core";
import { LayoutsComponent } from "./layouts.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [LayoutsComponent, NavbarComponent],
    imports: [RouterModule, CommonModule],
    exports: [LayoutsComponent, NavbarComponent]
})

export class LayoutsModule { }