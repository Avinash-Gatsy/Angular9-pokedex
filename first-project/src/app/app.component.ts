import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Training Angular 9';
  emp = {
    id: 1234,
    name: 'Kutti',
    salary: 1500000,
    gender: 'M'
  };
  emoji:any;
  today = new Date(2020,1,11); //in js month starts with 0 in date
  constructor(){
    
  }
  ngOnInit(){
    //https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b
    this.emoji = "<span style='font-size:50px;'>&#129313;</span>";
  }
  changeEmoji(step){
    if(step == 'enter'){
      this.emoji = "<span style='font-size:50px;'>&#129323;</span>";
    } else {
      this.emoji = "<span style='font-size:50px;'>&#129313;</span>";
    }
  }
}
