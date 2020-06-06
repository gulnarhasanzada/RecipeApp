import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  arr = [];
  loadedNav = 'recipe';

  onNavigate(navName: string){
    this.loadedNav = navName;
  }

  toggle(){

    this.show = !this.show;
    this.arr.push(Date.now());
  }
}
