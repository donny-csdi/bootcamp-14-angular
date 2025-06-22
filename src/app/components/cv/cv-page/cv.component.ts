import { Component } from '@angular/core';
import { CvService } from '../../../services/cv.service';
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

  count: number = 0;
  increment: number = 1;

  constructor(private cvService: CvService) {
    this.cvData = this.cvService.getDataCV();
  }

  updateCountStart(val: number) {
    this.count = val
  }

  updateIncrement(val: number) {
    this.increment = val
  }

}
