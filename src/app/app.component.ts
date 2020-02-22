import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'academind';

  opened:any = false;

  constructor(){}

  openDialog(){
    console.log("alo");
  }

  ngOnInit() {
  }
}
