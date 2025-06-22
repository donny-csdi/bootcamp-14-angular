import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-counter',
  standalone: false,
  templateUrl: './pokemon-counter.component.html',
  styleUrl: './pokemon-counter.component.scss'
})
export class PokemonCounterComponent implements OnInit, OnChanges, OnDestroy {

  @Input() startCount: number = 0;
  @Input() incrementBy: number = 1;

  public counter: number = 0;
  counterSubscription: Subscription | null = null;


  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit Called')
    this.counter = this.startCount
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called', changes)
    if (changes['startCount']) {
      this.counter = changes['startCount'].currentValue
      
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called')
  }

  resetCounter(): void {
    this.counter = this.startCount
  }

  addCounter(): void {
    this.counter += this.incrementBy
  }
  



}
