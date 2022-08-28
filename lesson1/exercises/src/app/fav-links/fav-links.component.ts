import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[][] = [["https://mathworld.wolfram.com/", "Wolfram Mathworld"],
    ["http://www.sosmath.com/trig/Trig5/trig5/trig5.html", "SOS Math Trigonometric Identities"],
    ["https://www.dndbeyond.com/", "D&D Beyond"]];

  constructor() { }

  ngOnInit() {
  }

}
