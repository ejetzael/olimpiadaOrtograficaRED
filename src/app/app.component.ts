import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from './shared/dialog-login/dialog-login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opened:any = false;

  constructor( public dialog: MatDialog, 
          public auth:AuthService ){}

  openDialog(){
    console.log("alo");
    this.dialog.open( DialogLoginComponent );
  }

  ngOnInit() {
  }
}
