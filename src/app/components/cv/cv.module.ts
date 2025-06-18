import { NgModule } from "@angular/core";
import { CvComponent } from "./cv-page/cv.component";
import { CommonModule } from "@angular/common";
import { CvService } from "./cv.service";

@NgModule({
    declarations:[CvComponent],
    imports:[
        CommonModule
    ],
    providers:[CvService],
    exports:[CvComponent]
})

export class CvModule { }
