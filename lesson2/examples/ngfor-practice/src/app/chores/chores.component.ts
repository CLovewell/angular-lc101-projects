import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   //chores = ['Complete LaunchCode prep work', 'Clean bathroom', 'Wash car'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   /*
   choreLists = [["Yesterday's Chores", ['Empty dishwasher',
      'Start LaunchCode prep work',
      'Buy groceries']],
   ["Today's Chores", ['Load dishwasher',
      'Finish LaunchCode prep work',
      'Buy groceries you forgot']],
   ["Tomorrow's Chores", ['Empty dishwasher AGAIN',
      'Play with LaunchCode practice code',
      'Buy groceries AGAIN']]];
   */

   chores = [
      {
         title: "Yesterday's Chores", tasks: ['Empty dishwasher',
            'Start LaunchCode prep work',
            'Buy groceries']
      },
      {
         title: "Today's Chores", tasks: ['Load dishwasher',
            'Finish LaunchCode prep work',
            'Buy groceries you forgot']
      },
      {
         title: "Tomorrow's Chores", tasks: ['Empty dishwasher AGAIN',
            'Play with LaunchCode practice code',
            'Buy groceries AGAIN']
      }
   ];
   constructor() { }

   ngOnInit() {
   }

}
