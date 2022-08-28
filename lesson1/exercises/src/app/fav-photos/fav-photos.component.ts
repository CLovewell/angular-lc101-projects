import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';

  image1 = "https://www.launchcode.org/assets/homepage/desktop-computer-133c1d5afdb40b0fa1d6bf8cc3bece17d85b685ac21dd0da068433aa5ef885a2.png";
  image2 = 'https://cdn.britannica.com/46/8446-050-BC92B998/Euclid-woodcut-1584.jpg';
  image3 = '../../assets/FamilyPhoto.jpg';
  images = [this.image1, this.image2, this.image3];

  constructor() { }

  ngOnInit() {
  }

}