import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src!: string;
  @Input() alt: string = '';
  @Input() dimension: number = 64;
  @Input() rounded: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public dimensions() {
    return `is-${this.dimension}x${this.dimension}`;
  }

}
