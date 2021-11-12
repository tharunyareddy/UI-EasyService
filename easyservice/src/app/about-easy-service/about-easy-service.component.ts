import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var anime: any;
@Component({
  selector: 'app-about-easy-service',
  templateUrl: './about-easy-service.component.html',
  styleUrls: ['./about-easy-service.component.css'],
})
export class AboutEasyServiceComponent implements OnInit, AfterViewInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.about-page');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.about-page .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.about-page',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }

  onClick() {
    this._route.navigate(['/home']);
  }
}
