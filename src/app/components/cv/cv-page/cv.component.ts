import { Component } from '@angular/core';
import { CvService } from '../cv.service';
import { ICvData } from '../../../utils/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: false,
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  public cvData: ICvData;

  constructor(private cvService: CvService) {
    this.cvData = this.cvService.getDataCV();
  }

}
