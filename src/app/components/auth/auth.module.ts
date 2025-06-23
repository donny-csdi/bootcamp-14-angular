import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        AuthService,
    ],
    exports: [
        RegisterComponent,
        LoginComponent,
    ]
})

export class AuthModule {}