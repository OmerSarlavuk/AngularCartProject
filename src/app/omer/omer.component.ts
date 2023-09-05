import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-omer',
  templateUrl: './omer.component.html',
  styleUrls: ['./omer.component.css']
})
export class OmerComponent  implements OnInit {

  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() userName: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void{

  }
}
