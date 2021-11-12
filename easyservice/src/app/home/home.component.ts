import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  anime: any;
  constructor(private _route: Router) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.home-page-heading');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.home-page-heading .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.home-page-heading',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
  knowMore(){
    this._route.navigate(['/about-easy-service']);
  }
}
