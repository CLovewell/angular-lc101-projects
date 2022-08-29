import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   toggleButtonActivation(): void {
      this.goldInactive = !this.goldInactive;
      this.silverInactive = !this.silverInactive;
      this.copperInactive = !this.copperInactive;
   }

   activateButtons(): void {
      this.goldInactive = false;
      this.silverInactive = false;
      this.copperInactive = false;
   }
}
