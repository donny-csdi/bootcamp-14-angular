import { NgModule } from "@angular/core";
import { CvComponent } from "./cv-page/cv.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CvService } from "../../services/cv.service";

@NgModule({
    declarations:[CvComponent],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers:[CvService],
    exports:[CvComponent]
})

export class CvModule { }
