import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Heladeriapp';

  ngOnInit() {
    $('[data-menu-underline-from-center] a').addClass('underline-from-center');
  }
}
