import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navSelected = new EventEmitter<string>();

  onSelect(navName:string){
    this.navSelected.emit(navName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
