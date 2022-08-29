import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   validTitle = true;

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string): void {
      if (!this.movies.includes(newTitle) &&
         newTitle !== '') {
         this.movies.push(newTitle);
         this.validTitle = true;
      }
      else this.validTitle = false;
   }
}